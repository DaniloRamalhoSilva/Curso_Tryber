import React from "react";

class Imputs extends React.Component {
  render(){
    const { text, tipo, id, name, placeholder } = this.props
    return (
      <label htmlFor={id}>{text}
        <input type={tipo} id={id} name={name} placeholder={placeholder}/>
      </label>

    )
  }
}

export default Imputs;