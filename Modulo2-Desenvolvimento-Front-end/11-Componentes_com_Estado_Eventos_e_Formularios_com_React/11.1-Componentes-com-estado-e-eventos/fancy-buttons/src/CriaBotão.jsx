import React from 'react';

class CriaBotão extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      cor: 'red',          
    }
    this.handleClick = this.handleClick.bind(this);
    this.trocaCort = this.trocaCort.bind(this);
  }

  trocaCort(nun) {
    if(nun % 2 === 0){
      return 'red';
    }
    return 'green';
  };

  handleClick() {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */    

    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
      cor: this.trocaCort(estadoAnterior.numeroDeCliques + 1),
    }))
  }

  render() {
    const { numeroDeCliques, cor } = this.state
    console.log(this.props);
    return <button className={cor} onClick={this.handleClick} >{numeroDeCliques}</button>
       
    
  }
}

export default CriaBotão;