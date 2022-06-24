const arr = ['hal', 'jordan'];
const impr = (n, i) => {
  arr[i] = n.toUpperCase();
};
arr.forEach(impr);

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

//emailListInData.forEach(showEmailList)

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verify = (n) => n%2 === 0

// console.log(numbers.find((n) => n%2 === 0))

const findDivisibleBy3And5 = () => {
  return numbers.find((n) => n % 3 === 0 && n % 2 === 0)
}

//console.log(findDivisibleBy3And5())

const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names1.find((n) => n.length === 5)
}

//console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((n) => n.id === id)
}

//console.log(findMusic('31031685'))

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((n) => n === name)
}

//console.log(hasName(names2, 'Ana'))

const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((n) => n.age >= minimumAge)
}

//console.log(verifyAges(people, 15));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age < b.age ? 1 : -1)

console.log(people);