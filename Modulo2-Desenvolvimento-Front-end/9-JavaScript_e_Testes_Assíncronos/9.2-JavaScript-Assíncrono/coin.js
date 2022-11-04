
const fetchCoin = async () => {
  const API_URL = `https://api.coincap.io/v2/assets`;
  const coins = await fetch(API_URL)
    .then(response => response.json())
    .then((d) => d.data)    
  return coins;
}

const fetchBRL = async () => {
  const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`
  const endpoint = `/currencies/usd.min.json`
  const url = baseUrl.concat(endpoint);

  const cotacao = await fetch(url)
    .then(response => response.json())
    .then((d) => d.usd)    
  return cotacao;
}

const getCoin = async ()=>{

  const cotacao  = await fetchBRL();
  const brl = cotacao.brl;


  const coinsDiv = document.getElementById('coins');
  const arrayCoin = await fetchCoin();
  const top10Coin = arrayCoin.filter((t, n)=> n< 10);

  top10Coin.forEach(({ name, symbol, priceUsd }) => {
    const coinP = document.createElement('p');  
    const price = Number(priceUsd) * brl;  
    coinP.innerText = `${name} (${symbol}) R$ ${price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} .`
    coinsDiv.appendChild(coinP);
  });
}

window.onload = () => getCoin();
