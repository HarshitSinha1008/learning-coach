from fastapi import FastAPI
from memory import remember_profile, recall_memory

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Memory Service is running"
    }

@app.post("/remember-profile")
async def remember_profile_api(profile: dict):

    goal = profile["goal"]
    learning_style = profile["learningStyle"]
    preferred_explanation = profile["preferredExplanation"]

    await remember_profile(
        goal,
        learning_style,
        preferred_explanation
    )

    return {
        "status": "success",
        "message": "Profile stored successfully"
    }

@app.post("/recall")
async def recall_api(query: dict):

    question = query["question"]

    result = await recall_memory(question)

    return {
        "status": "success",
        "result": result
    }