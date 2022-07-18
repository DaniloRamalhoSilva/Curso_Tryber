import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const montaLI = ({conteudo, bloco, status} , index) =>{
  const conteudoP = <p><em>O conteudo é: </em>{conteudo}</p>;
  const statusP = <p><em>Status:  </em>{status}</p>;
  const blocoP = <p><em>Bloco: </em>{bloco}</p>

  return <li className="liConteudo" key={index} >{conteudoP} {statusP} {blocoP}</li>
}

class Content extends Component {  
  render() {
    const jsxConteudo = conteudos.map((conteudo, index) => montaLI(conteudo , index) ) // cria um array de tags <li>    
    return <ol className="olConteudo" >{jsxConteudo}</ol>;    
  }
}

export default Content;