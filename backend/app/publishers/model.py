# Third Party
from sqlalchemy import Column, String, Integer, DateTime, func
# Local modules
from app.database.session import Base

class Publisher(Base):
    __tablename__ = "publishers"
    
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime, server_default=func.now())
    