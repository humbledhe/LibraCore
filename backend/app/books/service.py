# Third Party
from datetime import datetime

from fastapi import HTTPException, status
# Local modules
from app.books import repository, model
from app.books.google_books import search_google_books

def search_books(query: str, db):
    query = query.strip().lower()
    google_books = search_google_books(query)
    
    if not google_books: 
        return
    
    # get only the response that you need, so it can be validated by pydantic     
    return format_google_books_response(google_books)
    
def format_google_books_response(google_response):
    result = []
    
    for value in google_response:
        # index and append the result
        volume = value["volumeInfo"]

        image_links = volume.get("imageLinks").get("thumbnail") if volume.get("imageLinks") else None
        title = volume.get("title") if volume.get("title") else None
        authors = volume.get("authors") if volume.get("authors") else None
        info = value.get("searchInfo").get("textSnippet") if value.get("searchInfo") else None
        isbn = volume.get("industryIdentifiers")[0].get("identifier") if volume.get("industryIdentifiers") else None
                    
        result.append({
            "id": value["id"],
            "image_links": image_links,
            "title": title,
            "authors": authors,
            "info": info,
            "isbn": isbn
        })

    return result            