const testingScope = escopo => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

const oddsAndEvens = () => {
  let x = [13, 3, 4, 10, 7, 2];
  x = x.sort((a, b) => a - b);
  console.log(`Os números ${x} se encontram ordenados de forma crescente!"`);
}

const factorial = n => n > 1 ? n * factorial(n-1) : n;

const palavra = string => {
  let arr = string.split(' ');
  let ans = ''
  for (let i = 0; i < arr.length; i += 1){
    arr[i].length > ans.length ? ans = arr[i] : ans;
  }
  return ans
}


const checkX = string => {
  arr = string.split('')
  for (let i = 0; i < arr.length; i += 1){
    arr[i] === 'X' || arr[i] === 'x' ? arr[i] = 'Bebeto' : arr[i];
  }
  arr = arr.join('')
  return arr
}

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

const exCinco = array => {
  arr = array.sort()
  return arr
}
