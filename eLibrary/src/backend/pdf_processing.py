import faiss
import numpy as np
import pdfplumber
import torch
from transformers import AutoTokenizer, AutoModel

# FAISS index
d = 384
index = faiss.IndexFlatL2(d)

# Document mapping 
doc_store = {}

# Load MiniLM tokenizer & model
tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')
model = AutoModel.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')

def get_embedding(text): # embedding mtlb , ka jaan ke krega , aage bdh
    """Convert text into an embedding."""
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state.mean(dim=1).squeeze().numpy()

def process_pdf(pdf_path): # yha bs pdf khul rha , wo embedd ho rha aurr judte ja rha . last m return kr dega
    """Extract text from PDF and store embeddings in FAISS."""
    with pdfplumber.open(pdf_path) as pdf:
        text_data = [page.extract_text() for page in pdf.pages if page.extract_text()]

    full_text = " ".join(text_data)
    embedding = get_embedding(full_text).astype("float32")

    index.add(np.array([embedding]))  # Store in FAISS
    doc_store[index.ntotal - 1] = full_text  # Map index to text

    print(f"📄 Stored {pdf_path} in FAISS with ID {index.ntotal - 1}")

if __name__ == "__main__":
    process_pdf(r"AI_Tutor\prep_JEE\src\backend\Compiler-Design-TEXT-book-1.pdf")
    print(doc_store,"hello")
    faiss.write_index(index, "faiss_index.bin")  # index save ho rha , docs ka 
    np.save("doc_store.npy", doc_store)  # Save document mappings
