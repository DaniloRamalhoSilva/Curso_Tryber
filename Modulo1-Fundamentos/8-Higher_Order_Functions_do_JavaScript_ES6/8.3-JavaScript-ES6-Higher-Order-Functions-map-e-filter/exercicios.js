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

//🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
//Dica: Use a função map
function formatedBookNames(livros) {
  // escreva seu código aqui
 
  return livros.map((book) => `${book.name.split(" ").join("_")} - ${book.genre.split(" ").join("_")} - ${book.author.name.split(" ").join("_")}` );
}


//🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
//Dica: use as funções map, sort
function nameAndAge(livros) {
  // escreva seu código aqui
  return livros.map((book) => {
    return {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name
    }
  }).sort((a, b) => a.age - b.age)
}


//🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//Dica: use a função filter;
function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
}



//🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//Dica: use as funções filter e sort
function oldBooksOrdered() {
  // escreva seu código aqui
  const currentTime = new Date();
  const year = currentTime.getFullYear()
  return books.filter((book) => (year - book.releaseYear) > 60 ).sort((a, b) => (a.releaseYear - b.releaseYear))
}



//🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const ficcaoCientíficaFantasia = fantasyOrScienceFiction();
  return ficcaoCientíficaFantasia.map((iten) => iten.author.name).sort()
  
}


//🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  // escreva seu código aqui
  const livrosVelhos = oldBooksOrdered();
  return livrosVelhos.map((livro) => livro.name)
}



//🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName() {
  return books.find((book) => { // para no primeiro retorno true & retorna o objeto
    let arrPalavra = book.author.name.split(' '); // separa o nome do autor em palavras em um arrey de string
    let terminaComPonto = arrPalavra.filter((word) => word.endsWith('.')); // retorna um arrey com palavras que terminam com .
    let achei = terminaComPonto.length === 3; // retorna true se tever 3 palavras que terminam em .
    console.log(arrPalavra);
    console.log(terminaComPonto);
    console.log(achei);
    return achei; 
  }).name; // retorna somente o nome do objeto encontrado
}

console.log(authorWith3DotsOnName());
