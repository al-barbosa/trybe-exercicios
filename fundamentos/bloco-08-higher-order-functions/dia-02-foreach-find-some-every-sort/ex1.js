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


function authorBornIn1947() {
  return books.find((livro) => (livro.author.birthYear === 1947)).author.name;
}

//console.log(authorBornIn1947());

function smallerName() {
  let nameBook
  books.forEach((n) => {
    if (!nameBook || n.name.length < nameBook.length) {
      nameBook = n.name 
    }
  });
  return nameBook
}

//console.log(smallerName())

function getNamedBook() {
  return books.find((livro) => livro.name.length === 26)
}

//console.log(getNamedBook())

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1)
  return books
}

//console.log(booksOrderedByReleaseYearDesc())

function everyoneWasBornOnSecXX() {
  return books.every((n) => (n.author.birthYear < 2000 && n.author.birthYear >= 1900))
}

//console.log(everyoneWasBornOnSecXX())

function someBookWasReleaseOnThe80s() {
  return books.some((n) => (n.releaseYear < 1990 && n.releaseYear >= 1980))
}

//console.log(someBookWasReleaseOnThe80s())

function authorUnique() {
  return books.forEach((n) => console.log(n.author.birthYear))  
}

console.log(authorUnique())

let numbers = [1,2,3]
const arr = [];
numbers.forEach((n) => arr.push(n*3))

const expectedResult = false;

