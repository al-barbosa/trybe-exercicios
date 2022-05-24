let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


//1

console.log(`Bom dia, ${info['personagem']}`)


//2

info.recorrente = 'sim'



//3

 for (let n in info){
  console.log(n)
 }


//4

for (let n in info){
  console.log(info[n])
}


//

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for (let prop in info){
  if (prop === 'recorrente' && info2[prop] === "sim" && info[prop] === "sim"){
    console.log('Ambos são personagens recorrentes')
  } else {
    console.log(`${info[prop]} e ${info2[prop]}`)
  }
}


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome}: ${leitor.livrosFavoritos[0].titulo}`)

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rownling',
  editora: 'Rocco',
}


console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)