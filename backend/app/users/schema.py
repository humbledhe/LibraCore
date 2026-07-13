from pydantic import BaseModel, EmailStr, ConfigDict

class User(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str
    
    
class ShowUsers(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    
    model_config = ConfigDict(from_attributes=True)