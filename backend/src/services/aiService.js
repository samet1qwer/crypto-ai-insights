const axios = require("axios");

async function getAiSignal(prices) {
  const response = await axios.post("http://127.0.0.1:8000/api/predict", {
    prices: prices,
  });

  return response.data;
}

module.exports = {
  getAiSignal,
};
