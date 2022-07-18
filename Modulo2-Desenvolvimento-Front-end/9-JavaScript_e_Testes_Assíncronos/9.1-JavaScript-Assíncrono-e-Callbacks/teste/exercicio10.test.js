// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

beforeEach(() => console.log('1 - beforeEach')); //1 - 4
afterEach(() => console.log('1 - afterEach'));   //3 - 8

test('', () => console.log('1 - test')); //2

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // 5
  afterEach(() => console.log('2 - afterEach')); // 7

  test('', () => console.log('2 - test'));  //6
});

//1 - beforeEach
  //1 - test
//1 - afterEach

//1 - beforeEach

  //2 - beforeEach
    //2 - test
  //2 - afterEach

//1 - afterEach
