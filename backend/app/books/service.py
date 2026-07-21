# Third Party
from datetime import datetime
from fastapi import HTTPException, status
# Local modules
from app.books import repository, model
from app.books.google_books import search_google_books


def search_books(query: str, db):
    # start the search from our database and return if the book is found 
    query = query.strip().lower()
    
    # books = repository.search(db, query)
    
    # if books:
    #     print("found from local")
    #     return books
    
    # if the book is not in database, continue the search in Google books database     
    google_books = search_google_books(query)
    
    if not google_books:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
        return []
    
    # get only the response that you need, so it can be validated by pydantic     
    #return google_books
    return format_google_books_response(google_books)
    
def format_google_books_response(google_response):
    result = []
    
    for value in google_response:
        # index and append the result
        volume = value["volumeInfo"]
        #search_info = value["searchInfo"]

        image_links = volume.get("imageLinks").get("thumbnail") if volume.get("imageLinks") else None
        title = volume.get("title") if volume.get("title") else None
        authors = volume.get("authors") if volume.get("authors") else None
        info = value.get("searchInfo").get("textSnippet") if value.get("searchInfo") else None
        isbn = volume.get("industryIdentifiers")[0].get("identifier") if volume.get("industryIdentifiers") else None
        

        # publication_year = volume.get("publishedDate")

        # if publication_year:
        #     if len(publication_year) == 4:
        #         datetime.strptime(publication_year, "%y")
        #     elif len(publication_year) == 7:
        #         datetime.strptime(publication_year, "%y-%m")
        #     else:
        #         datetime.strptime(publication_year, "%y-%m-%d")
        # else:
        #     publication_year = None
                    
        result.append({
            "id": value["id"],
            "image_links": image_links,
            "title": title,
            "authors": authors,
            # "publication_year": publication_year,
            # "categories": volume.get("categories"),
            "info": info,
            "isbn": isbn
        })

    return result            