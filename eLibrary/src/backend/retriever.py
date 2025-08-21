import os
import faiss
import numpy as np
import google.generativeai as genai

# --- Load Pre-processed Data ---
try:
    index = faiss.read_index("faiss_index.bin")
    doc_store = np.load("doc_store.npy", allow_pickle=True).item()
except FileNotFoundError:
    print("Error: faiss_index.bin or doc_store.npy not found.")
    print("Please run pdf_processing.py first to generate these files.")
    exit()


# --- Google AI Configuration ---
from dotenv import load_dotenv
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not found in environment variables.")
genai.configure(api_key=GOOGLE_API_KEY)


def get_embedding(text: str, model="models/embedding-001"):
    """Convert query text into an embedding using Google's model."""
    return genai.embed_content(model=model, content=text)["embedding"]

def retrieve(query: str, top_k: int = 3):
    """Retrieve the top_k most relevant text chunks for a given query."""
    query_embedding = np.array(get_embedding(query)).astype("float32").reshape(1, -1)

    # Search FAISS for the most similar document embeddings
    distances, indices = index.search(query_embedding, top_k)

    # Return the corresponding text chunks
    return [doc_store[idx] for idx in indices[0] if idx in doc_store]