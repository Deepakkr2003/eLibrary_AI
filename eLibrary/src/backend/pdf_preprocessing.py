import os
import faiss
import numpy as np
import pdfplumber
import google.generativeai as genai

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

# --- FAISS Configuration ---
d = 768  # Dimension for Google's embedding-001 model
index = faiss.IndexFlatL2(d)
doc_store = {}

# --- Google AI Configuration ---
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not found in environment variables.")
genai.configure(api_key=GOOGLE_API_KEY)

def get_embedding(text: str, model="models/embedding-001"):
    """Convert text into an embedding using Google's model."""
    return genai.embed_content(model=model, content=text)["embedding"]

def process_pdf(pdf_path: str):
    """Extract text from PDF and store its embedding in FAISS."""
    print(f"Processing {pdf_path}...")
    try:
        with pdfplumber.open(pdf_path) as pdf:
            full_text = "\n".join(
                page.extract_text() for page in pdf.pages if page.extract_text()
            )

        if not full_text:
            print(f"Warning: No text extracted from {pdf_path}")
            return

        # Generate embedding for the entire document
        embedding = np.array(get_embedding(full_text)).astype("float32").reshape(1, -1)

        # Store in FAISS and map the index to the text
        index.add(embedding)
        doc_store[index.ntotal - 1] = full_text
        print(f"📄 Stored {pdf_path} in FAISS with ID {index.ntotal - 1}")

    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")


if __name__ == "__main__":
    # Make sure the PDF file exists
    pdf_file = "Compiler-Design-TEXT-book-1.pdf"
    if os.path.exists(pdf_file):
        process_pdf(pdf_file)
        print("Saving FAISS index and document store...")
        faiss.write_index(index, "faiss_index.bin")
        np.save("doc_store.npy", doc_store)
        print("Done.")
    else:
        print(f"Error: The file '{pdf_file}' was not found. Please make sure it's in the same directory.")