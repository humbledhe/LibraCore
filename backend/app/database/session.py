# Third Party
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
# Local modules
from app.core.config import settings

SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg://{settings.DATABASE_USERNAME}:{settings.DATABASE_PASSWORD}@{settings.DATABASE_HOSTNAME}:{settings.DATABASE_PORT}/{settings.DATABASE_NAME}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)