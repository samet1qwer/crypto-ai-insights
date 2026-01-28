const { getAiSignal } = require("../services/aiService");

exports.analyzeCrypto = async (req, res) => {
  try {
    const prices = req.body.prices;

    const aiResult = await getAiSignal(prices);

    res.json({
      success: true,
      ai: aiResult,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
