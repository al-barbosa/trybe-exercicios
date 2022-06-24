const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function formatedBookNames() {
  return books.map((n) => `${n.name.toUpperCase().split(' ').join('_')} - ${n.genre.toUpperCase().split(' ').join('_')} - ${n.author.name.toUpperCase().split(' ').join('_')}`)
}

//console.log(formatedBookNames())

function nameAndAge() {
  const ans =  books.map((n) => {
    const obj = {};
    obj.age = n.releaseYear - n.author.birthYear;
    obj.author = n.author.name;
    return obj
  })
  return ans.sort((a, b) => a.age > b.age ? 1 : -1)
}

//console.log(nameAndAge())

function fantasyOrScienceFiction() {
  return books.filter((n) => (n.genre === 'Fantasia' || n.genre === 'Ficção Científica'))
}

//console.log(fantasyOrScienceFiction())

function oldBooksOrdered() {
  return books
    .filter((n) => n.releaseYear <= 1962)
    .sort((a, b) => a.releaseYear > b.releaseYear ? 1 : -1);
}

//console.log(oldBooksOrdered())

function fantasyOrScienceFictionAuthors() {
  return books
    .filter((n) => (n.genre === 'Fantasia' || n.genre === 'Ficção Científica'))
    .map((n) => n.author.name)
    .sort()
}

//console.log(fantasyOrScienceFictionAuthors())

function oldBooks() {
  return books
    .filter((n) => n.releaseYear <= 1962)
    .map((n) => n.name)
}

//console.log(oldBooks())

function authorWith3DotsOnName() {
  return books.filter((n) => n.author.name === '/\b.\. .\. .\./')
}

console.log(authorWith3DotsOnName())