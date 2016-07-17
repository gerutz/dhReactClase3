import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

export default class SimpleApplication extends Component {

constructor (props) {
  super(props);
  this.state = {
    value : "Hola Mundo",
    sexo : "asdf"
  }
}

handleValueChange (event) {
  this.setState({value : event.target.value});
}

handleSelectedOption (event) {
  this.setState({sexo: event.target.value})
}

handlePrintImput (){
  console.log(this.state.value);
  console.log(this.state.sexo);
}

render() {
  return (
    <div>
      <InputControlado defaultValue = {this.state.value}
                       changeValue = {this.handleValueChange.bind(this)}/>

      <SelectorSexo defaultValue = {this.state.sexo}
                    seleccion = {this.handleSelectedOption.bind(this)}/>

      <Button  printInput = {this.handlePrintImput.bind(this)}/>
    </div>
  );
}

}//end SimpleApplication

export default class SelectorSexo extends Component {
  render(){
    return(
      <div>
        <select value={this.props.defaultValue} onChange={this.props.seleccion}>
          <option value="Masculino" >Masculino</option>
          <option value="Femenino" >Femenino </option>
          <option value="Otro">Otro </option>
        </select>
      </div>

    );
  }
}

export default class InputControlado extends Component {
  render (){
    return (
      <div>
        <input type="text" value={this.props.defaultValue} onChange={this.props.changeValue}/>
      </div>
    );
  }
}

export default class Button extends Component {
  render(){
    return(
      <div>
        <button type="submit" onClick={this.props.printInput}>Enviar </button>
      </div>
    );
  }
}


ReactDOM.render(<SimpleApplication />, content);
