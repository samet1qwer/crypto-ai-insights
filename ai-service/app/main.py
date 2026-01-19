from fastapi import FastAPI
from app.api import predict

app = FastAPI(title="Crypto AI Service")

app.include_router(predict.router)
