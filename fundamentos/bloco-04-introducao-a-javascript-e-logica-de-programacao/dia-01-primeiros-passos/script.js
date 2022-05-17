// 1

function soma(a, b){
  console.log(a+b);
}

function sub(a, b){
  console.log(a-b);
}

function mult(a, b){
  console.log(a*b);
}

function div(a, b){
  console.log(a/b);
}

function mod(a, b){
  console.log(a%b);
}

// 2


function maior(a,b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}


//3


function menor(a,b){
  if (a < b){
    return a;
  } else {
    return b;
  }
}


//4

function posneg(a){
  if (a > 0){
    return "positive"
  } else if (a < 0){
    return negative
  } else {
    return zero
  }
}


//5

function triangulo(a,b,c){
  if (a>=180 || b>=180 || c>=180){
    return "erro"
  } else if ((a+b+c) === 180){
    return true
  } else {
    return false
  }
}


//6

function xadrez(a){
  a = a.toLowerCase()
  if (a === "rei"){
    return "Casas adjacentes"
  } else if (a === "rainha"){
    return "Vertical, horizontal e diagonal"
  } else if (a === "torre"){
    return "Vertical e horizontal"
  } else if (a === "bispo"){
    return "Diagonal"
  } else if (a === "cavalo"){
    return "L"
  } else if (a === "peão"){
    return "Para frente"
  } else {
    return "Erro de peça"
  }
}


// 7

function nota(a){
  if (a >= 90){
    return "A"
  } else if (a >= 80){
    return "B"
  } else if (a >= 70){
    return "C"
  } else if (a >= 60){
    return "D"
  } else if (a >= 50){
    return "E"
  } else {
    return "F"
  }
}


// 8

function par(x, y, z){
  const a = x;
  const b = y;
  const c = z;
  return (a%2 === 0 || b%2 === 0 || c%2 === 0);
}


// 9

function impar(x, y, z){
  const a = x;
  const b = y;
  const c = z;
  return (a%2 != 0 || b%2 != 0 || c%2 != 0)
}


// 10

function salLiquido(x){
  let sal = inss(x);
  sal = ir(sal);
  return sal
}

function inss(x){
  if (x <= 1556.94){
    x -= x*0.08;
    return x
  } else  if (x <= 2594.92){
    x -= x*0.09;
    return x
  } else  if (x <= 5189.82){
    x -= x*0.11;
    return x
  } else{
    x -= 570.88;
    return x
  }
}

function ir(x){
  if (x <= 1903.98){
    return x    
  } else  if (x <= 2826.65){
    x -= (x*0.075-142.80);
    return x
  } else  if (x <= 3751.05){
    x -= (x*0.15-354.80);
    return x
  } else  if (x <= 4664.68){
    x -= (x*0.225-636.13);
    return x
  } else{
    x -= (x*0.275-869.36);
    return x
  }
}