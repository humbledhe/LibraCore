# Third Party
import requests
import time
from typing import List

from fastapi import HTTPException, status
# Local modules
from app.core.config import settings

BASE_URL = "https://www.googleapis.com/books/v1/volumes"
MAX_RETRIES = 5

def search_google_books(query: str) -> list[dict]:
    genres = ["Fiction", "Horror", "Classic", "Sci-Fi"]

    payLoad = {
        "q": query,
        "maxResults": 40,
        "key": settings.API_KEY
    }
    
    try:
        for attempt in range(MAX_RETRIES):
            response = requests.get(
                BASE_URL,
                params=payLoad,
                timeout=10
        )

            if response.status_code == 503 or response.status_code == 504:
                print(f"503 exception received. Retrying... ({attempt + 1}/{MAX_RETRIES})")
                time.sleep(0.5)
                continue
            break

        response.raise_for_status()

        data = response.json()

        items = data.get("items", {})
        
        if not items:
            raise HTTPException(status_code=404, detail=f"No search results found")
        
        return items

    except requests.RequestException as e:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=f"Google Books API error: {e}")
        #print(e)