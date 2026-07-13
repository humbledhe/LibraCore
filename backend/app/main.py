# Third Party
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
#Local modules
from app.core.dependencies import get_db
from app.users.routes import router as users_router
from app.staffs.routes import router as staffs_router
from app.auth.routes import router as auth_router
from app.books.routes import router as books_router

app = FastAPI(
    title="Library Management System API",
    description="""
A REST API for managing a library system.

## Features
- User authentication (JWT)
- Staff management
- Book management
- Borrowing and returning books
- Fines and reports
""",
    version="1.0.0",
    contact={
        "name": "Prosper Chiedu",
        "email": "prosperchiedu10@gmail.com",
    },
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

origins = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

app.include_router(users_router)
app.include_router(staffs_router)
app.include_router(auth_router)
app.include_router(books_router)