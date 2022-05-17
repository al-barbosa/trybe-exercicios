//1

function roma(num){
  let arr = []
  for(let n = 0; n < num.length; n+=1){
    if (num[n] === "I"){
      arr.push(1)
    } else if (num[n] === "V"){
      arr.push(5)
    } else if (num[n] === "X"){
      arr.push(10)
    } else if (num[n] === "L"){
      arr.push(50)
    } else if (num[n] === "C"){
      arr.push(100)
    } else if (num[n] === "D"){
      arr.push(500)
    } else {
      arr.push(1000)
    }
  }

  let ans = arr.reduce((acc, elem) => {
    if (acc > elem){
      return elem + acc
    } else {
      return elem - acc
    }
  }, 0)
  return Math.abs(ans)
}


//2

function arrayOfNumbers(arr){
  let ans = []
  for (let i in arr){
    for (let j in arr[i]){
      if (arr[i][j]%2 === 0){
        ans.push(arr[i][j])
      }
    }
  }
  return ans
}


//3

function cesta(arr){
  let bask = {}
  for (let i in arr){
    bask[arr[i]] = 0
  }
  for (let i = 0; i < arr.length; i += 1){
    bask[arr[i]] += 1
  }
  let ans = "Sua cesta possui: "
  for (let i in bask){
    ans += `${bask[i]} ${i}; `
  }
  return ans
}


//4

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(`O morador do blodo 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`)


//5

for (let i in moradores.blocoUm){
  console.log(moradores.blocoUm[i].nome, moradores.blocoUm[i].sobrenome)
}

for (let i in moradores.blocoDois){
  console.log(moradores.blocoDois[i].nome, moradores.blocoDois[i].sobrenome)
}