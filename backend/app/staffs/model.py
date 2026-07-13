# Third Party
from sqlalchemy import Column, String, Integer
# Local modules
from app.database.session import Base

class Staff(Base):
    __tablename__ = "staffs"   
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False, unique=True)    
    