const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCoin = () => {
  // const myObject = {
  //   Accept-Encoding: gzip,
  // }
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 10; i += 1) {
      const newCoin = document.createElement('li');
      newCoin.innerText = `${data.data[i].name} is currently ${parseFloat(data.data[i].priceUsd).toFixed(2)} USD`;
      document.getElementById('cryptoContainer').appendChild(newCoin)
    }
    })
}

window.onload = () => fetchCoin();


