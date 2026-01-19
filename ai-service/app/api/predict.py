from fastapi import APIRouter
import pandas as pd

from app.schemas.predict import PredictRequest, PredictResponse
from app.utils.indicators import add_indicators

router = APIRouter()

@router.post("/predict", response_model=PredictResponse)
def predict(data: PredictRequest):
    df = pd.DataFrame([p.dict() for p in data.prices])
    df = add_indicators(df)

    last = df.iloc[-1]

    if last["rsi"] < 30:
        signal = "BUY"
    elif last["rsi"] > 70:
        signal = "SELL"
    else:
        signal = "HOLD"

    return {
        "signal": signal,
        "confidence": 0.65
    }
