import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {

  constructor(props){
    super(props);

    this.state = {
      inicial : 0,
      actual : 0
    }
  }

  handleAgregarNumero () {
    return this.setState({actual : this.state.actual+1});
    console.log(this.state.actual);
  }

  handleEliminarNumero () {
    return this.setState({actual : this.state.actual-1});
    console.log(this.state.actual);
  }

  handleResetNumero () {
    return this.setState({actual : 0});
  }

  render() {
    return (
      <div>
            <Label estadoInicial = {this.state.actual}
            />
            <Texto estadoInicial = {this.state.inicial}
                   estadoActual = {this.state.actual}
            />
            <Button agregarNumero = {this.handleAgregarNumero.bind(this)}
                    eliminarNumero = {this.handleEliminarNumero.bind(this)}
                    resetNumero = {this.handleResetNumero.bind(this)}
            />
      </div>
    );
  }

}//end SimpleApplication

class Label extends Component {

  render () {

    return(
      <div>
        <label>El numero actual es  {this.props.estadoInicial}</label>
      </div>
    );
  }
}

class Texto extends Component {

  render(){

    let calcularModulo = (valor) => {
      if(valor === 0){
        return "Cero";
      }else if(valor % 2 == 0){
        return "Par";
      }else{
        return "Impar";
      };
    };

    let val = this.props.estadoActual;

    let resultado = calcularModulo(val);

    return(
      <div>
        <p>{resultado}</p>
      </div>
    );
  }
}

class Button extends Component {

  render(){
    return(
      <div>
      <button type="submit" onClick = {this.props.agregarNumero}>Sumar</button>
      <button type="submit" onClick = {this.props.eliminarNumero}>Restar</button>
      <button type="submit" onClick = {this.props.resetNumero}>Resetear</button>
      </div>

    );
  }
}

ReactDOM.render(<SimpleApplication />, content);
