import React, { Component } from "react";

class Sobre extends Component {
  render() {
    const nome = <h1>Danilo Ramalho silva</h1>
    const desct = <p>Moro no Morro Doce, São Paulo - SP, tenho 32 anos, casado, sou um programador web full stack</p>
    const skills = ['HTML', 'CSS', 'React', 'HTML', 'JavaScript', 'C#', 'SQL'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    const title = <h2>Minhas Habilidades</h2>
    const list = <ol>{jsxSkills}</ol>
    return <div>{nome}{desct}{title}{list}</div>
  }
}

export default Sobre;