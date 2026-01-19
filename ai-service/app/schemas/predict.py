from pydantic import BaseModel
from typing import List

class PriceItem(BaseModel):
    close: float

class PredictRequest(BaseModel):
    prices: List[PriceItem]

class PredictResponse(BaseModel):
    signal: str
    confidence: float
