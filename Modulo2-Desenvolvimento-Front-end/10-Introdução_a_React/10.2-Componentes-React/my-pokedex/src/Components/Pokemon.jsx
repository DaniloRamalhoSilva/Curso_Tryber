import React from "react";

class Pokemon extends React.Component{
  render(){
    const {name, type, averageWeight, image } = this.props.pokemon; 
    const {value, measurementUnit} = averageWeight;
    return <div>
      <p>{ name }</p>
      <p>{ type }</p>
      <p>{ `${measurementUnit} : ${value}`  }</p>
      <img src={image}/>
    </div>
  }
}

export default Pokemon;