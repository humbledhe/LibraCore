# Third Party
from sqlalchemy import Column, String, Integer
# Local modules
from app.database.session import Base

class Author(Base):
    __tablename__ = "authors"
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    