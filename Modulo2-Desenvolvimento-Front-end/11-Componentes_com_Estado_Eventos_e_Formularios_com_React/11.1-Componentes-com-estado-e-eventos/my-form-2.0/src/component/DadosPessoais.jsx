import React from "react";
/* Nome - Texto
Limite de 40 caracteres
Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
Campo obrigatório
Email - Texto
Limite de 50 caracteres
Campo obrigatório
CPF - Texto
Limite de 11 caracteres
Campo obrigatório
Endereço - Texto
Limite de 200 caracteres
Remover qualquer caracter especial que seja digitado
Campo obrigatório
Cidade - Texto
Limite de 28 caracteres
Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
Campo obrigatório.
Estado - ComboBox
Todos os estados do Brasil
Campo obrigatório.
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório. */

class DadosPessoais extends React.Component {
  render(){
    return <label htmlFor="">Nome:</label>
  }
}

export default DadosPessoais;