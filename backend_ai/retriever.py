# retriever.py
import os
import faiss
import numpy as np
import google.generativeai as genai
from fastapi import HTTPException, status
import subprocess
import sys

# --- Load Pre-processed Data ---
index = None
doc_store = None

def load_data():
    """Load the FAISS index and document store from files."""
    global index, doc_store
    
    # Check if the data files exist. If not, trigger pre-processing.
    if not os.path.exists("faiss_index.bin") or not os.path.exists("doc_store.npy"):
        print("Data files not found. Attempting to run pre-processing script.")
        try:
            # Get the directory of the current script
            script_dir = os.path.dirname(os.path.abspath(__file__))
            pdf_preprocessing_path = os.path.join(script_dir, "pdf_preprocessing.py")
            pdf_path = os.path.join(script_dir, "Compiler-Design-TEXT-book-1.pdf")


            if not os.path.exists(pdf_preprocessing_path):
                print(f"Error: pdf_preprocessing.py not found at {pdf_preprocessing_path}")
                return False

            if not os.path.exists(pdf_path):
                print(f"Error: PDF file not found at {pdf_path}")
                return False

            # Run pdf_preprocessing.py as a subprocess with the PDF path as an argument
            result = subprocess.run([sys.executable, pdf_preprocessing_path, pdf_path], capture_output=True, text=True)
            print("PDF pre-processing output:")
            print(result.stdout)
            if result.stderr:
                print("PDF pre-processing errors:")
                print(result.stderr)
            
            # Check if the files were created successfully
            if not os.path.exists("faiss_index.bin") or not os.path.exists("doc_store.npy"):
                print("Error: Pre-processing failed to create data files.")
                return False
        except Exception as e:
            print(f"Failed to run pdf_preprocessing.py: {e}")
            return False

    try:
        index = faiss.read_index("faiss_index.bin")
        doc_store = np.load("doc_store.npy", allow_pickle=True).item()
        print("Successfully loaded FAISS index and document store.")
        return True
    except Exception as e:
        print(f"Error loading data from files: {e}")
        index = None
        doc_store = None
        return False

# --- Google AI Configuration ---
from dotenv import load_dotenv
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not found in environment variables.")
genai.configure(api_key=GOOGLE_API_KEY)

def get_embedding(text: str, model="models/embedding-001"):
    """Convert query text into an embedding using Google's model."""
    try:
        return genai.embed_content(model=model, content=text)["embedding"]
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to get embedding from Google AI: {str(e)}")

def retrieve(query: str, top_k: int = 3):
    """Retrieve the top_k most relevant text chunks for a given query."""
    # Ensure data is loaded before proceeding
    if index is None or doc_store is None:
        if not load_data():
            raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Retriever is not available. Missing or corrupted data files.")

    # Check if the FAISS index has any vectors
    if index.ntotal == 0:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="FAISS index is empty. Please ensure the PDF has been pre-processed and contains text.")

    query_embedding = np.array(get_embedding(query)).astype("float32").reshape(1, -1)

    # Search FAISS for the most similar document embeddings
    distances, indices = index.search(query_embedding, top_k)

    # Return the corresponding text chunks
    return [doc_store[idx] for idx in indices[0] if idx in doc_store]

# Initial data load attempt on module import
load_data()
