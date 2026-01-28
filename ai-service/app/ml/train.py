import pandas as pd
import numpy as np
from utils.db import prices_col
from utils.indicators import add_indicators
from sklearn.ensemble import RandomForestRegressor
import joblib


def load_price_data(crypto_id: str):
    cursor = prices_col.find(
        {"crypto_id": crypto_id},
        {"_id": 0, "price": 1, "date": 1}
    ).sort("date", 1)

    df = pd.DataFrame(list(cursor))
    return df

def create_dataset(series, window=14):
    X, y = [], []

    for i in range(len(series) - window):
        X.append(series[i:i + window])
        y.append(series[i + window])

    return np.array(X), np.array(y)
def train_model(crypto_id: str):
    df = load_price_data(crypto_id)

    if len(df) < 50:
        raise ValueError("Yetersiz veri")

    prices = df["price"].values
    X, y = create_dataset(prices)

    model = RandomForestRegressor(
        n_estimators=200,
        random_state=42
    )
    model.fit(X, y)

    joblib.dump(model, f"models/{crypto_id}.joblib")
    print("Model trained")

    return True
