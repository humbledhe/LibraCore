# Third party
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
# Local modules
from app.books import model as books_model
from app.core.dependencies import get_db
from app.books import service, schema

router = APIRouter(
    prefix="/books",
    tags=["Books"]
)

@router.get(
    "/search", 
    response_model=list[schema.BookResponse]
    )
async def search_book(q: str, db: Session = Depends(get_db)):
    return service.search_books(q, db)