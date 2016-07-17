import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

export default class SimpleApplication extends Component {

constructor (props) {
  super(props);
  this.state = {
    value : "Hola Mundo"
  }
}

handleValueChange (event) {
  this.setState({value : event.target.value});
}

handlePrintImput (){
  console.log(this.state.value);
  {/*Donde capturo este imput me da undefined*/}
  if(this._input !== null){
    console.log(this._input);
  }

}

render() {
  return (
    <div>
      <InputControlado defaultValue = {this.state.value}
                       changeValue = {this.handleValueChange.bind(this)}/>
      <InputNoControlado />
      <Button  printInput = {this.handlePrintImput.bind(this)}/>
    </div>
  );
}

}//end SimpleApplication

export default class InputControlado extends Component {
  render (){
    return (
      <div>
        <input type="text" value={this.props.defaultValue} onChange={this.props.changeValue}/>
      </div>
    );
  }
}


export default class InputNoControlado extends Component {
  render(){
    return (
      <div>
        <input type="text" ref={(c) => this._input = c} />
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
