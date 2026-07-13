# Third Party
from sqlalchemy import Column, String, Integer
# Local modules
from app.database.session import Base

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True)
    