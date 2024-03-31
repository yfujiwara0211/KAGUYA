from sqlalchemy import Boolean, Column, Integer, String, Float
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), unique=True, index=True)
    password = Column(String(100))
    is_active = Column(Boolean, default=True)
