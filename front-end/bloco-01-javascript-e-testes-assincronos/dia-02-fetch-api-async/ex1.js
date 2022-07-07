
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const jokeContainer = document.getElementById('jokeContainer')

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const newJoke = document.createElement('p');
      newJoke.innerText = data.joke;
      document.getElementById('jokeContainer').appendChild(newJoke)
    });
};

window.onload = () => fetchJoke();
