const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const ans = []
  arrays.forEach((n) => n.forEach((b) => ans.push(b)))
  return ans
}

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

//console.log(flatten())

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

function reduceNames() {
  return books.reduce((acc, book, i, arr) => {
    if (i === arr.lengt - 1) return `${book.author.name}.`;
    return `${book.author.name}, `
  }, '')
}

//console.log(reduceNames())

function averageAge() {
  return books.reduce((acc, n) => ((n.releaseYear - n.author.birthYear) + acc), 0) / books.length;
}

//console.log(averageAge())

function longestNamedBook() {
  return books.reduce((acc, n) => {
    if (n.name.length > acc.name.length) return n
    return acc
  })
}

//console.log(longestNamedBook())

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha'
];

function containsA() {
  return names.reduce((acc, n) => acc + n.replace(/[^a]/gmi, "").length, 0)
}

//console.log(containsA())

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const ans = []
  const arr  = grades.map((n) => (n.reduce((acc, nota) => acc + nota) / 5));
  students.map((n, i) => ans.push({name: n, average: arr[i]}))
  return ans
}

//console.log(studentAverage())