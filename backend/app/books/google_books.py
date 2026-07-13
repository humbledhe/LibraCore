# Third Party
import requests
# Local modules
from app.core.config import settings

BASE_URL = "https://www.googleapis.com/books/v1/volumes"

def search_google_books(query):
    try:
        response = requests.get(
            BASE_URL,
            params = {
                "q": query,
                "key": settings.API_KEY
            }
        )
    
        if response.status_code != 200:
            return []
            
        data = response.json()
        
        return data.get("items", []) 

    except requests.RequestException as e:
        print("Google Books error:", e)
        return []                    