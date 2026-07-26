# Third Party
import requests
import time

from fastapi import HTTPException, status
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

        response.raise_for_status()

        data = response.json()

        items = data.get("items")
        
        if not items:
            raise HTTPException(status_code=404, detail=f"No search results for '{query}'")
        
        return items

    except requests.exceptions.ConnectionError:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Unable to connect to the external service") 
    # except requests.exceptions.HTTPError:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)