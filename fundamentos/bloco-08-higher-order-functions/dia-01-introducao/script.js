const wake = () => 'Wake Up!'
const cafe = () => 'Bora tomar café!'
const dormir = () => 'Partiu dormir!'

const doingThings = (callback) => { console.log(callback()) }

doingThings(wake);

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


console.log(newEmployees())