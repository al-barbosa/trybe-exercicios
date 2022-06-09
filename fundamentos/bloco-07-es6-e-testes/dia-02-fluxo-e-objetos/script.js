const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  console.log(`Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment.total},00.`);
}

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNoite (objeto, chave, valor) {
  objeto[chave] = valor;
}

addNoite(lesson2, 'turno', 'noite');

function chaves (objeto) {
  return Object.keys(objeto);
}

function tamanho (objeto) {
  return Object.keys(objeto).length;
}

function valores (objeto) {
  return Object.values(objeto);
}

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

function mat(objeto) {
  const chaves = Object.keys(objeto);
  let cont = 0;
  for (let i = 0; i < chaves.length; i += 1) {
    objeto[chaves[i]].materia === 'Matemática' ? cont += objeto[chaves[i]].numeroEstudantes : cont;
  }
  return cont;
}

function prof(objeto, nome) {
  const ans = {
    professor: nome
  }
  const aulas = [];
  let estudantes = 0;
  const chaves = Object.keys(objeto);
  for (let i = 0; i < chaves.length; i += 1) {
    if (objeto[chaves[i]].professor === nome) {
      estudantes += objeto[chaves[i]].numeroEstudantes;
      aulas.push(objeto[chaves[i]].materia);
    }
    // objeto[chaves[i]].professor === nome ? estudantes += objeto[chaves[i]].numeroEstudantes : estudantes;
    // objeto[chaves[i]].professor === nome ? aulas.push(objeto[chaves[i]].materia) : aulas;
  }
  ans.aulas = aulas;
  ans.estudantes = estudantes;
  return ans;
}

console.log(prof(allLessons, 'Maria Clara'))
