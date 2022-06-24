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
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const ataqueDragao = (dragao) => getRandomIntInclusive(15, dragao.strength); 

//2 - Crie uma função que retorna o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const ataqueWarrior = (quereiro) => getRandomIntInclusive(quereiro.strength, quereiro.strength * quereiro.weaponDmg);

//3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const ataqueMage = (mago) => {
  turno = {
    dano: 'Não possui mana suficiente',
    mana: 0
  }
  if(mago.mana > 15){
    turno.mana = 15;
    turno.dano = getRandomIntInclusive(mago.intelligence, mago.intelligence * 2);
  }
  return turno;
}


const gameActions = {
  //1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
  tWarrior: (ataque) => { 
    const dano = ataque(warrior);   
    warrior.damage = dano;
    dragon.healthPoints -= dano;
  },

  //2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
  tMage: (ataque) => {  
    const dano = ataque(mage);   
    mage.damage = dano.dano;
    mage.mana -= dano.mana;
    dragon.healthPoints -= dano.dano;
  },

  //3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

  tDragon: (ataque) => { 
    const dano = ataque(dragon);
    dragon.damage = dano;
    mage.healthPoints -= dano;
    warrior.healthPoints -= dano;
  },

  retorno: () => {
    return battleMembers;
  }
};

gameActions.tDragon(ataqueDragao);
gameActions.tWarrior(ataqueWarrior);
gameActions.tMage(ataqueMage);

console.log(gameActions.retorno());