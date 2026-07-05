from dotenv import load_dotenv
import os

load_dotenv()

print("LLM KEY:", os.getenv("LLM_API_KEY")[:20])
print("EMBEDDING KEY:", os.getenv("EMBEDDING_API_KEY")[:20])