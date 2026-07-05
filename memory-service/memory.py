import cognee

async def remember_profile(goal, learning_style, preferred_explanation):

    await cognee.forget(everything=True)

    text = f"""
    Student Goal: {goal}
    Learning Style: {learning_style}
    Preferred Explanation: {preferred_explanation}
    """

    await cognee.remember(text)

async def recall_memory(question):
    result = await cognee.recall(question)

    if result:
        return result[0].text
    
    return "I don't know the answer yet."
