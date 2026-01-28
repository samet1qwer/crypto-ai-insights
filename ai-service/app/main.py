from fastapi import FastAPI
from api.predict import router as predict_router
from api.health import router as health_router

app = FastAPI(title="Crypto AI Service")

app.include_router(health_router)
app.include_router(predict_router)
