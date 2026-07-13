from pydantic import BaseModel, ConfigDict

class BookResponse(BaseModel):
    title: str