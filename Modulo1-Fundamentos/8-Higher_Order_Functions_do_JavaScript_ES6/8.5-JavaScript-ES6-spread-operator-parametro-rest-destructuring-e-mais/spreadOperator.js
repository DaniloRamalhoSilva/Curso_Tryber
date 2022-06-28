// Spread Operator
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'creme de leite', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return saladaDefrutas = [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));




// Parametro rest
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88





