const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://icanhazdadjoke.com/api';
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();