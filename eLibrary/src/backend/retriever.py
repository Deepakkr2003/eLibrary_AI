import faiss
import numpy as np
import torch
from transformers import AutoTokenizer, AutoModel

# Load FAISS index and document store
index = faiss.read_index("faiss_index.bin")
doc_store = np.load("doc_store.npy", allow_pickle=True).item()

# Load MiniLM tokenizer & model
tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')
model = AutoModel.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')

def get_embedding(text): # yha pr user ka query embedd ho rha , docs ni , usko bhi krna pdta h 
    """Convert query text into an embedding."""
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state.mean(dim=1).squeeze().numpy()

def retrieve(query, top_k=5):
    """Retrieve the top_k most relevant text chunks for a given query."""
    query_embedding = get_embedding(query).astype("float32").reshape(1, -1)

    # Search FAISS for nearest neighbors
    distances, indices = index.search(query_embedding, top_k)

    results = []
    for idx in indices[0]:
        if idx in doc_store:
            results.append(doc_store[idx])  # Retrieve corresponding text

    return results
