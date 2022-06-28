
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const total = {...user, ...jobInfos}

//const {name, age, nationality, profession, squad, squadInitials} = total

//console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad} aka ${squadInitials}`)

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

const [opa, saudacao] = ['Olá', (saudacao) => console.log(saudacao)];

//saudacao(opa);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares

//console.log(numerosPares)

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const multiply = (number = 1, value = 1) => {
  return number * value
};

// console.log(multiply(8));

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const sum = (...args) => args.reduce((acc, n) => acc + n, 0)

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const complete = {...alex, ...gunnar}
//const {name, age, likes} = complete

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

//console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
//console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo