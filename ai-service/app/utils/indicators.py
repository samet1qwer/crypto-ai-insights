import pandas as pd

def calculate_rsi(series, period=14):
    delta = series.diff()
    gain = delta.clip(lower=0)
    loss = -delta.clip(upper=0)

    avg_gain = gain.rolling(period).mean()
    avg_loss = loss.rolling(period).mean()

    rs = avg_gain / avg_loss
    rsi = 100 - (100 / (1 + rs))
    return rsi

def calculate_ema(series, span=20):
    return series.ewm(span=span, adjust=False).mean()


def add_indicators(df: pd.DataFrame):
    df["rsi"] = calculate_rsi(df["close"])
    df["ema"] = calculate_ema(df["close"])
    return df
