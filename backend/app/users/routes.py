# Third Party
from fastapi import APIRouter, status, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from typing import List
# Local modules
from app.users import model as users_model
from app.users import schema as users_schema
from app.core import security
from app.core.dependencies import get_db, get_current_user

router = APIRouter(
    prefix="/users",
    tags=["User"]
)

@router.post("", status_code=status.HTTP_201_CREATED)
def create_user(user_credentials: users_schema.User, db: Session = Depends(get_db)):
    # passing password through a hashing algr
    hashed_password = security.hash(user_credentials.password)
    user_credentials.password = hashed_password
    
    # unpacking user credentials into a dict format for serializing
    new_user = users_model.User(**user_credentials.model_dump())
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return new_user
    
@router.get("", response_model=list[users_schema.ShowUsers])
def get_user(db: Session = Depends(get_db)):
    users = db.query(users_model.User).all()
    
    return users
    
@router.get("/{id}", response_model=users_schema.ShowUsers)    
def get_user(id: int, db: Session = Depends(get_db)):
    # Finding a user that matches our id
    user_query = db.query(users_model.User).filter(users_model.User.id == id)
    
    user = user_query.first()
    
    # Simply raise an error and update the status code if id does not exist
    if not user:
          raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Could not find a user with id: {id}")
          
    return user_query.first()         
    
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)    
def delete_user(id: int, db: Session = Depends(get_db)):
    # Finding a user that matches our id
    user_query = db.query(users_model.User).filter(users_model.User.id == id)
     
    user = user_query.first() 
    
    # Simply raise an error and update the status code if id does not exist
    if not user:
          raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Could not find a used with id: {id}")
          
    user_query.delete(synchronize_session=False)     
    db.commit()
    
    return Response(status_code=status.HTTP_204_NO_CONTENT)
    
