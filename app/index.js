import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    };
  }

  handleCambiarNumero() {
    this.setState({ numero: this.state.numero + 1 });
  }

  handleRestarNumero(){
    this.setState({numero: this.state.numero -1});
  }

  render() {
    return (
      <div>
        <Label numero={this.state.numero} />
        <Button cambiarNumero={this.handleCambiarNumero.bind(this)} />
        <ButtonRestar restarNUmero={this.handleRestarNumero.bind(this)}/>
      </div>
    );
  }
}

class Label extends Component {
  static get propTypes() {
    return {
      numero: PropTypes.number.isRequired
    }
  }

  render() {
    return (
      <h1>Numero: {this.props.numero}</h1>
    );
  }
}

class ButtonRestar extends Component{

  render(){
    return(
      <button onClick={this.props.restarNUmero}>Restar</button>
    );
  }

}

class Button extends Component {
  static get propTypes() {
    return {
      cambiarNumero: PropTypes.func.isRequired
    };
  }


  render() {
    return (
      <button onClick={this.props.cambiarNumero}>Sumar</button>
    );
  }
}
ReactDOM.render(<SimpleApplication />, content);
