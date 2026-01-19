import pandas as pd
import ta

def add_indicators(df: pd.DataFrame):
    df["rsi"] = ta.momentum.RSIIndicator(df["close"]).rsi()
    df["macd"] = ta.trend.MACD(df["close"]).macd()
    return df.dropna()
