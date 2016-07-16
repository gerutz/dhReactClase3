import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {

  constructor(props){
    super(props);
    this.state = {
      value : 0
    }
  }

  handleSumar(){
    this.setState({value : this.state.value+1})
  }

  handleRestar(){
    this.setState({value : this.state.value-1})
  }

  render() {
    return (
      <div>
        <Label valor = {this.state.value}/>
        <Button operacionSumar={this.handleSumar.bind(this)}/>
        {/*<Button operacionRestar={this.handleRestar.bind(this)}/>*/}
      </div>
    );
  }
}

class Label extends Component {
  render (){
    return (
      <div>
        <label>El valor del contador es: {this.props.valor} </label>
      </div>
    );
  }
}

class Button extends Component {
  render () {
    return (
      <div>
        <button type="submit" onClick={this.props.operacionSumar} >Sumar </button>
      </div>
    );
  }
}

ReactDOM.render(<SimpleApplication />, content);
