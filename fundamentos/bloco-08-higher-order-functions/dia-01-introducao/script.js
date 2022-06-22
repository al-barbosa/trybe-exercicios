const wake = () => 'Wake Up!'
const cafe = () => 'Bora tomar café!'
const dormir = () => 'Partiu dormir!'

const doingThings = (callback) => { console.log(callback()) }

//doingThings(wake);

const namegen = (fullName) => {
  return { fullName, email: fullName.split(' ').join('_').toLowerCase() + '@servidor.com' }
}

const newEmployees = () => {
  const employees = {
    id1: namegen('Pedro Guerra'),
    id2: namegen('Luiza Drumond'),
    id3: namegen('Carla Paiva')
  }
  return employees;
};

const winner = () => (Math.floor(Math.random()*5) + 1)

const lotery = (n) => {
  return winner() === n ? 'Parabéns!' : 'Que pena'
}

const numberCheck = (myNumber, number) => myNumber === number;

const sorteio = (myNumber, callback) => {
  return callback(myNumber, (Math.floor(Math.random()*5) + 1)) ? 'WIN' : 'lose'
};

const checkAns = (ans1, ans2) => {
  return ans1 === ans2 ? 1 : 0
}

const testCheck = (arr1, arr2, callback) => {
  let score = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    score += callback(arr1[i], arr2[i]); 
  }
  return score
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => (Math.floor( Math.random() * (warrior.strength - 14) ) + 15)
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => (Math.floor( Math.random() * (dragon.strength - 14) ) + 15)
};

const battleMembers = { mage, warrior, dragon };

