# Third Party
from fastapi import APIRouter, status, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
# Local modules
from app.auth import schema as auth_schema
from app.users import schema as users_schema
from app.users import model as users_model
from app.core import security
from app.core.dependencies import get_db

router = APIRouter(
    prefix="/login",
    tags=["Authentication"],
)

@router.post("")
def login_user(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # Comparing if the user email match 
    user = db.query(users_model.User).filter(users_model.User.email == form_data.username).first()
    
    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid user credentials")
    
    # re-hashing the user password to check if the previously hashed password match 
    if not security.verify(form_data.password, user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid user credentials")
    
    # Storing the user_id in the payload    
    access_token = security.create_access_token(data={"user_id": user.id})    
    
    # Generated after the user logins 
    return {
            "access_token": access_token, 
            "token_type": "bearer"
    }