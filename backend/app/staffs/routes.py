# Third Party
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
# Local modules
from app.staffs import model as staffs_model
from app.staffs import schema as staffs_schema
from app.core import security
from app.core.dependencies import get_db, get_current_user

router = APIRouter(
    prefix="/staffs",
    tags=["Staff"]
)

@router.post("", status_code=status.HTTP_201_CREATED)
def create_staffs(staff_credentials: staffs_schema.Staff, db: Session = Depends(get_db), get_current_user = Depends(get_current_user)):
    # passing password through a hashing algr
    hashed_password = security.hash(staff_credentials.password)
    staff_credentials.password = hashed_password
    
    # unpacking user credentials into a dict format for serializing
    new_staff = staffs_model.Staff(**staff_credentials.model_dump())
    
    db.add(new_staff)
    db.commit()
    
    db.refresh(new_staff)
    
    return new_staff

@router.get("", response_model=list[staffs_schema.ShowStaffs])
def get_staffs(db: Session = Depends(get_db), user_id = Depends(get_current_user)):
    staffs = db.query(staffs_model.Staff).all()
    
    return staffs
    
@router.get("/{id}", response_model=staffs_schema.ShowStaffs) 
def get_staff(id: int, db: Session = Depends(get_db), user_id = Depends(get_current_user)):
    # Finding a user that matches our id
    staff_query = db.query(staffs_model.Staff).filter(staffs_model.Staff.id == id)   
    
    staff = staff_query.first()
    
    # Simply raise an error and update the status code if id does not exist
    if not staff:
          raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Could not find a staff with id: {id}")
    
    return staff
    
        