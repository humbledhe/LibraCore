# Third Party
from jose import JWTError, jwt
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from datetime import datetime, timedelta
# Local modules
from app.core.config import settings
from app.core import schema

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash(password: str):
    return pwd_context.hash(password)
    
def verify(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)    

def create_access_token(data: dict):
    # create a copy of the data to be encoded
    to_encode = data.copy()
    
    # Logout the user anytime the token reaches expiration date
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    
    # create jwt token 
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
    return encoded_jwt
    
def verify_access_token(token: str, credentials_exceptions):
    try:
        # Decode the token and get the id from the payload
        PayLoad = jet.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id: str = PayLoad.get("user_id")
        
        if not id:
            raise credentials_exceptions
        
        # Check if the users id matches the token id    
        token_data = schema.TokenData(id=id)    
    except JWTError:
        raise credentials_exceptions 
        
    return token_data    