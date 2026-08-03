# Third Party
from datetime import datetime
from typing import List

from fastapi import HTTPException, status
# Local modules
from app.books.schema import  BookResponse
from app.api.google_books import search_google_books

def search_books(query: str) -> list[BookResponse]:
    query = query.strip().lower()

    google_books = search_google_books(query)
    
    if not google_books: 
        return
    
    # get only the response that you need, so it can be validated by pydantic     
    #return google_books
    return format_google_books_response(google_books)
    
def format_google_books_response(google_response) -> list[dict]:
    result = []
    
    for value in google_response:
        # index and append the result
        volume = value["volumeInfo"]

        # Error checking for indexes that don't exists
        image_links = volume.get("imageLinks").get("thumbnail") if volume.get("imageLinks") else None
        title = volume.get("title") if volume.get("title") else None
        subtitle = volume.get("subtitle") if volume.get("subtitle") else None
        authors = volume.get("authors") if volume.get("authors") else None
        categories = volume.get("categories") if volume.get("categories") else None 
                    
        result.append({
            "id": value["id"],
            "image_links": image_links,
            "title": title,
            "subtitle": subtitle,
            "authors": authors,
            "categories": categories
        })

    return result