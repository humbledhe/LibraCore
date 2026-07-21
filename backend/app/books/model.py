# Third Party
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, func
from enum import Enum
# Local modules
from app.database.session import Base

class Book(Base):
    __tablename__ = "books"
    
    id = Column(Integer, primary_key=True)
    title = Column(String)
    isbn = Column(String, unique=True)
    publisher_id = Column(Integer, ForeignKey("publishers.id", ondelete="CASCADE"))
    category_id = Column(Integer, ForeignKey("categories.id", ondelete="CASCADE"))
    publication_year = Column(DateTime)