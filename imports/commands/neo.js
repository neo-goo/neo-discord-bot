const request = require('request');
const currency = require('currency-formatter');

module.exports = (client, message) => {
  request.get({
      url: 'https://api.coinmarketcap.com/v1/ticker/neo/?convert=USD',
      json: true
    },
    function (e, r, prices) {
      const price = prices[0];
      message.channel.send(`current NEO price = ${currency.format(price.price_usd, { code: 'USD' })}, B${price.price_btc} (CoinMarketCap)`);
    });
};
