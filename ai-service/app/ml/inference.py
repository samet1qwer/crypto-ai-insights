import joblib
import numpy as np
from utils.db import prices_col
import pandas as pd

def predict_next_price(crypto_id: str, window=14):
    model = joblib.load(f"models/{crypto_id}.joblib")

    cursor = prices_col.find(
        {"crypto_id": crypto_id},
        {"_id": 0, "price": 1}
    ).sort("date", -1).limit(window)

    prices = list(cursor)
    prices = [p["price"] for p in reversed(prices)]

    X = np.array(prices).reshape(1, -1)
    prediction = model.predict(X)[0]

    return float(prediction)
