# retriever.py
import os
import faiss
import numpy as np
import google.generativeai as genai
from fastapi import HTTPException, status

# --- Load Pre-processed Data ---
index = None
doc_store = None
try:
    index = faiss.read_index("faiss_index.bin")
    doc_store = np.load("doc_store.npy", allow_pickle=True).item()
    print("Successfully loaded FAISS index and document store.")
except FileNotFoundError:
    print("Warning: faiss_index.bin or doc_store.npy not found.")
    print("The retriever will not function. Please run pdf_processing.py first.")
    index = None
    doc_store = None


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
    if index is None or doc_store is None:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Retriever is not available. Missing data files.")

    query_embedding = np.array(get_embedding(query)).astype("float32").reshape(1, -1)

    # Search FAISS for the most similar document embeddings
    distances, indices = index.search(query_embedding, top_k)

    # Return the corresponding text chunks
    return [doc_store[idx] for idx in indices[0] if idx in doc_store]
