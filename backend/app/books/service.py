from app.books import repository 
from app.books.google_books import search_google_books


def search_books(query: str, db):
    # start the search from our database and return if the book is found 
    books = repository.search(db, query)
    
    if books:
        print("found")
        return books
    
    # if the book is not in database, continue the search in Google books database     
    google_books = search_google_books(query)
    
    if not google_books:
        print ("Google books not found")
        return []
    
    # get only the response that you need, so it can be validated by pydantic     
    return format_google_books_response(google_books)
    
    
def format_google_books_response(google_response):
    result = []
    
    for item in google_response:
        # index and append the result
        volume = item["volumeInfo"]
        
        result.append({
            "title": volume.get("title"),
        })    
        
    return result            