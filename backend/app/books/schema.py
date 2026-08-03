from pydantic import BaseModel, ConfigDict
from typing import List, Optional
from datetime import datetime

class BookResponse(BaseModel):
    id: str
    image_links: Optional[str] = None
    title: Optional[str] = None
    subtitle: Optional[str] = None
    authors: Optional[List[str]] = None
    categories: Optional[list[str]] = None

    model_config = ConfigDict(from_attributes=True)