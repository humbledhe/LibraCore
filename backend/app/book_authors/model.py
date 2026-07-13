# Third Party
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, func
# Local modules
from app.database.session import Base

class BookAuthor(Base):
    __tablename__ = "book_authors"
    
    book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), primary_key=True)
    author_id = Column(Integer, ForeignKey("authors.id", ondelete="CASCADE"), primary_key=True)