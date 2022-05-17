//1

function quadrado(n){
  let ans = ""
  for (let i = 0; i < n; i += 1){
    for (let j = 0; j < n; j += 1){
      ans += "*"
    }  
    console.log(ans)
    ans = ""
  }
}


//2

function triangulo(n){
  let ans = ""
  for (let i = 0; i < n; i += 1){
    for (let j = n; j >= (n-i); j -= 1){
      ans += "*"
    }
    console.log(ans)
    ans = ""
  }
}


//3

function  iTriangulo(n){
  let ans = ""
  for (let i = 1; i <= n; i += 1){
    for (let j = n-i; j > 0; j -= 1){
      ans += " "
    }
    for (let j = i; j > 0; j -= 1){
      ans += "*"
    }
    console.log(ans)
    ans = ""
  }
}


//4

function piramide(n){
  let ans = ""
  for (let i = 1; i <= n; i += 2){
    for (let j = n-i; j >= 0; j -= 2){
      ans += " "
    }
    for (let j = i; j > 0; j -= 1){
      ans += "*"
    }
    console.log(ans)
    ans = ""
  }
}

piramide(7)