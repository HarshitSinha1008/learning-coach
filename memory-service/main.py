from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Memory Service is running"
    }

@app.post("/remember-profile")
def remember_profile(profile: dict):

    goal = profile["goal"]
    learning_style = profile["learningStyle"]
    preferred_explanation = profile["preferredExplanation"]

    print("Goal:", goal)
    print("Learning Style:", learning_style)
    print("Preferred Explanation:", preferred_explanation)

    return {
        "status": "success",
        "message": "Profile stored successfully"
    }