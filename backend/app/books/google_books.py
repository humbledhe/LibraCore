# Third Party
import requests
import time
# Local modules
from app.core.config import settings

BASE_URL = "https://www.googleapis.com/books/v1/volumes"

def search_google_books(query):
    MAX_RETRIES = 5
    
    try:
        for attempt in range(MAX_RETRIES):
            response = requests.get(
                BASE_URL,
                params={
                    "q": query,
                    "key": settings.API_KEY
                },
                timeout=(10)
        )

            if response.status_code == 503 or response.status_code == 504:
                print(f"503 exception received. Retrying... ({attempt + 1}/{MAX_RETRIES})")
                time.sleep(0.5)
                continue
            break
    
        if response.status_code != 200:
            return response
            
        data = response.json()
        
        return data.get("items", []) 

    except requests.RequestException as e:
        print("Google Books error:", e)
        return []                    