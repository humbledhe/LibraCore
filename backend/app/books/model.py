# Third Party
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, func
# Local modules
from app.database.session import Base

class Book(Base):
    __tablename__ = "books"
    
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    isbn = Column(String, nullable=False, unique=True)
    publisher_id = Column(Integer, ForeignKey("publishers.id", ondelete="CASCADE"), nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id", ondelete="CASCADE"), nullable=False)
    publication_year = Column(DateTime, nullable=False)
    created_at = Column(DateTime, server_default=func.now())