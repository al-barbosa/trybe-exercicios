let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i=0; i < numbers.length; i++){
  console.log(numbers[i])
}


//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0
for (let i=0; i < numbers.length; i++){
  sum = sum+numbers[i]
}


//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mean = (sum/numbers.length)


//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mean > 20){
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor ou igual a 20")
}


//5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;


let max = -Infinity
for (let i=0; i < numbers.length; i++){
  if (numbers[i] > max){
    max = numbers[i]
  }
}


//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0
for (let i=0; i < numbers.length; i++){
  if (numbers[i]%2 != 0){
    impar += 1
  }
}

if (impar != 0){
  console.log(impar)
} else {
  console.log("nenhum valor ímpar encontrado")
}


//7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let min = Infinity
for (let i=0; i < numbers.length; i++){
  if (numbers[i] < min){
    min = numbers[i]
  }
}


//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let nArray = []
for (let i = 0; i < 25; i++){
  nArray[i] = i+1
}
console.log(nArray)


//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let i = 0; i < nArray.length; i++){
  console.log(nArray[i]/2)
}