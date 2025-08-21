import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Literal
import google.generativeai as genai
from retriever import retrieve

# --- Environment and API Configuration ---
from dotenv import load_dotenv
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not found in environment variables.")
genai.configure(api_key=GOOGLE_API_KEY)

# --- FastAPI App Initialization ---
app = FastAPI(
    title="AI Tutor and Exam Generator API",
    description="An API for an AI tutor that can answer questions and generate exams."
)

# --- CORS (Cross-Origin Resource Sharing) Middleware ---
# This allows your frontend (exam.html) to communicate with this backend.
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:5500", # Common for VS Code Live Server
    "null", # Allows opening the HTML file directly (file://)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Pydantic Models for Type Hinting and Validation ---

class QueryRequest(BaseModel):
    prompt: str
    model: str = "gemini-1.5-pro-latest"

class ExamRequest(BaseModel):
    topic: str = Field(..., description="The topic for the exam (e.g., 'Lexical Analysis').")
    num_questions: int = Field(5, gt=0, le=20, description="Number of questions to generate.")
    question_types: List[Literal["MCQ", "ShortAnswer"]] = Field(
        default=["MCQ", "ShortAnswer"],
        description="Types of questions to include in the exam."
    )

# --- Existing AI Tutor Endpoint ---

@app.post("/query", tags=["AI Tutor"])
async def query_google_ai(request: QueryRequest):
    """
    Accepts a user prompt, retrieves context, and returns an AI-generated answer.
    """
    try:
        contexts = retrieve(request.prompt, top_k=3)
        retrieved_text = "\n\n---\n\n".join(contexts)

        model_context_protocol = f"""
        **Your Role:** You are an expert AI Tutor for Computer Science.
        **Protocol Rules:**
        1.  **Prioritize Provided Context:** Base your primary answer on the 'Provided Context' below.
        2.  **Handle Missing Information:** If the context doesn't contain the answer, state that and then answer using your general knowledge.
        3.  **Provide Examples:** Include a code example if it helps clarify the concept.
        4.  **Cite Your Source:** If you used the context, end with "[Answer based on provided documents]".

        ---
        **Provided Context:**
        {retrieved_text}
        ---

        **User's Question:** {request.prompt}
        """

        model = genai.GenerativeModel(request.model)
        response = model.generate_content(model_context_protocol)

        return {"response": response.text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")


# --- New AI Exam Generator Endpoint ---

@app.post("/generate-exam", tags=["Exam Generator"])
async def generate_exam(request: ExamRequest):
    """
    Generates an exam with a specified number of questions on a given topic.
    """
    try:
        exam_context = retrieve(request.topic, top_k=5)
        if not exam_context:
            raise HTTPException(status_code=404, detail="Could not find relevant content for the specified topic.")
        
        retrieved_text = "\n\n---\n\n".join(exam_context)

        exam_generation_prompt = f"""
        You are an expert Exam Creator for a university-level Computer Science course.
        Your task is to create an exam based on the provided 'Textbook Context'.

        **Exam Specifications:**
        - Topic: {request.topic}
        - Total Questions: {request.num_questions}
        - Question Types to Include: {', '.join(request.question_types)}

        **Textbook Context:**
        ---
        {retrieved_text}
        ---

        **Instructions:**
        1.  Generate exactly {request.num_questions} questions.
        2.  Distribute the questions among the requested types ({', '.join(request.question_types)}).
        3.  Ensure questions are relevant to the provided context and topic.
        4.  **You MUST output a single, valid JSON object and nothing else.** The root of the object must be a key named "exam".
        5.  Each question object must have these keys:
            - "question_number": (Integer)
            - "question_type": (String) "MCQ" or "ShortAnswer".
            - "question_text": (String)
            - "options": (List of Strings) For "MCQ" only.
            - "correct_answer": (String)

        **Example JSON Structure:**
        {{
          "exam": [
            {{
              "question_number": 1,
              "question_type": "MCQ",
              "question_text": "What is the primary function of a Lexical Analyzer?",
              "options": ["Syntax Analysis", "Code Generation", "To produce a stream of tokens", "Semantic Analysis"],
              "correct_answer": "To produce a stream of tokens"
            }}
          ]
        }}
        """

        model = genai.GenerativeModel("gemini-1.5-pro-latest")
        response = model.generate_content(exam_generation_prompt)
        
        # Clean the response to ensure it's valid JSON before parsing
        cleaned_text = response.text.strip().replace("```json", "").replace("```", "")
        
        # Parse the JSON to validate it and return a proper JSON response
        exam_json = json.loads(cleaned_text)

        return exam_json

    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Failed to generate a valid JSON for the exam.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate exam: {str(e)}")