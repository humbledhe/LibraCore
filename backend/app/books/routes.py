# Third party
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Any
# Local modules
from app.books.service import search_books
from app.books.schema import  BookResponse

router = APIRouter(
    prefix="/books",
    tags=["Books"]
)

@router.get(
    "/search", 
    response_model=list[BookResponse],
    response_model_exclude_defaults=True
    )
async def search_book(q: str) -> Any:
    return search_books(q)

