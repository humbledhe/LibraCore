from pydantic import BaseModel, EmailStr, ConfigDict

class Staff(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str    
    
class ShowStaffs(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr   
    
    model_config = ConfigDict(from_attributes=True)
        