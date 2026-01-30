exports.getAssets = async (req, res) => {
  const symbols = await crypto_asset.find();
  res.send(symbols);
};

exports.getAsset = async (req, res) => {
  const id = req.params.id;
  const symbol = await crypto_asset.findById(id);
  res.send(symbol);
};

exports.addAsset = async (req, res) => {
  const symbol = req.body.symbol;
  const name = req.body.name;

  const newSymbol = new crypto_asset({
    symbol: symbol,
    name: name,
  });
  const savedSymbol = await newSymbol.save();
  res.send(savedSymbol);
};

exports.deleteAsset = async (req, res) => {
  const id = req.params.id;
  const symbol = await crypto_asset.findByIdAndDelete(id);
  res.send(symbol);
};
