import axios from 'axios';


const getCoinPrices = (id, days) => {
  console.log("Coin Prices")
  const data = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      // console.log("hii1" ,response.data)
      return response.data.prices;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
  return data;

}

export default getCoinPrices