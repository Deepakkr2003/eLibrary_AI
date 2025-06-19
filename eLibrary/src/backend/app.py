from threadpoolctl import threadpool_limits

with threadpool_limits(limits=1):
    import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
from retriever import retrieve



from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend (localhost:5173) to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY") #.env se groq api iske andr aa rha hai


groq_client = Groq(api_key=GROQ_API_KEY)# client initialization


MAX_TOKENS = 4096  # free version m km hi tokens daal skte h , premium lena pdega lekin usse jada bhi kuch improvement ni hoga todha sa hi hoga

class QueryRequest(BaseModel):
    prompt: str # yha pr user ka question ja rha h 
    model: str = "llama-3.3-70b-versatile"  # ekk bs default thik thak model h , dusra bhi try krenge baad m  

@app.post("/query")
async def query_groq(request: QueryRequest):
    try:
        contexts = retrieve(request.prompt, top_k=3)  # retriever ke andr h ye function , user ke question se sbse relevant document utha rha h yha pr , top 3
        if not contexts:
            contexts = ["No relevant documents found."] # maan le question h book se bhr toh koi context ni hoga , sirf model answer krega
        retrieved_text = '\n'.join(contexts)

        if len(retrieved_text) > MAX_TOKENS - 1000:  # bs maje m -1000 kiye h , max limit hi shyad 4096 h , usse km kr diye
            retrieved_text = retrieved_text[:MAX_TOKENS - 1000]  
        # ye bs model ko bhejne ke liye prompt ko ekk structure de rhe h , model m kuch msg hmesha fit rhega( fine tuning) aurr kuch context aurr wo jo prompt de rha h
        augmented_prompt = f""" You are an AI tutor. Given the following text, generate the most relevant answer and if relevant show a example.

        Text:
        {retrieved_text}

        Output format:

        Answer: [correct answer]

        If the context is not relevant, answer using your own knowledge.

        User Question: {request.prompt}
        AI Answer:
        """
        if len(augmented_prompt) > MAX_TOKENS:
            augmented_prompt = augmented_prompt[:MAX_TOKENS]  

        messages = [
            {"role": "system", "content": "You are an AI tutor. Answer concisely and factually."},
            {"role": "user", "content": augmented_prompt}
        ]

        response = groq_client.chat.completions.create(
            model=request.model,
            messages=messages
        )


        return {"response": response.choices[0].message.content}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) # exception handling



