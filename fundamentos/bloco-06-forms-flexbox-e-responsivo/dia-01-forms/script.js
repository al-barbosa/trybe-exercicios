const sendBtn = document.getElementById('send');
const clearBtn = document.getElementById('clear');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const resposta = document.getElementById('resposta');
const data = document.getElementById('data');
const destino = document.getElementsByClassName('destino');
const subscribe = document.getElementById('subscribe');
const accept = document.getElementById('accept');

sendBtn.addEventListener('click', (event) => {
  if (!accept.checked) {
    event.preventDefault();
    return window.alert('Favor concordar')
  }
  event.preventDefault();
})
