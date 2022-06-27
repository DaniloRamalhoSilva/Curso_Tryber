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

// Adicione o código do exercício aqui:

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//Dica: use a função find.

const authorBornIn1947 = (livros) => {
  // escreva aqui o seu código
  const objLivro = livros.find((book) => book.author.birthYear === 1947);
  return objLivro.author.name;
}

//2 - Retorne o nome do livro de menor nome.
//Dica: use a função forEach.
const smallerName = (livros) => {
  let nameBook;
  // escreva aqui o seu código
  livros.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}


//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNamedBook = (livros) => livros.find((book) => book.name.length === 26);


//4 - Ordene os livros por data de lançamento em ordem decrescente.
const booksOrderedByReleaseYearDesc = (livros) => {
  return livros.sort((a, b) => { a.releaseYear - b.releaseYear })
}

//5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const everyoneWasBornOnSecXX = (livros) => {
  return livros.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000)
}


//🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = (livros) => {
  return livros.some((book) => book.releaseYear > 1800 && book.releaseYear <= 1900)
}


// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = () => {
  let resposta = true;
  books.forEach((book1) => {
    books.forEach((book2) => {
      if(book1.author.birthYear === book2.author.birthYear && book1.id !== book2.id){
        return resposta = false;
      }
    });
  });
  return resposta;
}


console.log(authorUnique());

//resposta trybe
/* const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)
    )
  );
} */