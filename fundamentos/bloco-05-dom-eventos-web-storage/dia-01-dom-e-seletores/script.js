let word = document.getElementsByTagName('p');
let main = document.getElementsByTagName('main');
let h1 = document.getElementById('title')
let center = document.getElementsByClassName('center-content')

word[0].innerText = 'Me vejo trabalhando e feliz, em um Brasil melhor.';
main[0].style.backgroundColor = 'rgb(76,164,109)'
h1[0].innerText = "Exercício 5.1 - JavaScript"
center[0].style.backgroundColor = '#FFF'
console.log(center[0].parentElement)
for (let i in word){
  console.log(word[i].innerHTML)
  word[i].style.textTransform = 'uppercase';
}
