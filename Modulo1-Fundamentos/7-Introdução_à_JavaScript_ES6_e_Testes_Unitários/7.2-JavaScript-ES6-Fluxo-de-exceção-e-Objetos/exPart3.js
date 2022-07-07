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

//1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const add = (obfAserModificado, chaveAserAdicionada, valorDaChave ) => {  
  obfAserModificado[chaveAserAdicionada] = valorDaChave;    
}

add(lesson2, 'turno', 'noite');


//2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obg) => {
 return Object.keys(obg);
}

listKeys(lesson1);


//3 - Crie uma função para mostrar o tamanho de um objeto.
const mostraTamanhoObj = (obg) => {  
  return listKeys(obg).length ;
}


//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValue = (obg) => {
  return Object.values(obg);
}

listValue(lesson1);
//5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
const allLessons = Object.assign({},{lesson1,lesson2,lesson3});



//6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalEstudante = (obg) => {  
  let nEstudante = 0;
  for(i=0; i < mostraTamanhoObj(obg); i+=1){
    nEstudante += obg[listKeys(obg)[i]].numeroEstudantes;    
  }
  return nEstudante;  
}
console.log(totalEstudante(allLessons));


//7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, posição) => {
  return listValue(obj)[posição];
}

console.log(getValueByNumber(lesson1, 0));

//8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const encontra = (obj, chave, valor) => {
   
  let isEqual = false;
   for(let index in Object.entries(obj)){
    if (Object.entries(obj)[0].includes(chave) && Object.entries(obj)[1].includes(valor)) isEqual = true
   }
   return isEqual;

}


console.log(encontra(lesson2,'professor','Carlos'));