from fastapi import APIRouter, HTTPException
import pandas as pd

from app.schemas.predict import PredictRequest, PredictResponse
from app.utils.indicators import add_indicators

router = APIRouter()

@router.post("/predict", response_model=PredictResponse)
def predict(data: PredictRequest):
    if len(data.prices) < 20:
        raise HTTPException(status_code=400, detail="Yetersiz veri")

    df = pd.DataFrame([p.dict() for p in data.prices])

    df = df.sort_values("date")

    df = add_indicators(df)

    last = df.iloc[-1]

    if pd.isna(last["rsi"]):
        raise HTTPException(status_code=400, detail="RSI hesaplanamadı")

    if last["rsi"] < 30:
        signal = "BUY"
        confidence = min(1.0, (30 - last["rsi"]) / 30)
    elif last["rsi"] > 70:
        signal = "SELL"
        confidence = min(1.0, (last["rsi"] - 70) / 30)
    else:
        signal = "HOLD"
        confidence = 0.4

    return {
        "signal": signal,
        "confidence": round(confidence, 2)
    }
