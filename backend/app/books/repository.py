# Third Party 
from app.books.model import Book

def search(db, query):
    return (
        # Ignore cases and find every instance of that query
        db.query(Book).filter(Book.title.ilike(f"%{query}%")).all()
    )