# Third Party
from fastapi import Depends, HTTPException, status 
# Local modules
from app.database.session import SessionLocal
from app.core import security

def get_db():
    db = SessionLocal()
    
    try:
        yield db
    finally:
        db.close()
        
def get_current_user(token: str = Depends(security.oauth2_scheme)):
    credentials_exceptions = HTTPException(status_code=HTTP_401_UNAUTHORISED, detail="Could not validate user", header={"WWW-Autenticate": "bearer"})
    
    return security.verify_access_token(token, credentials_exceptions)