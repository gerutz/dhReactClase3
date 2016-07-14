import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      estado : true
    };
  }

  handleCambiarNumero() {
    this.setState({ numero: this.state.numero + 1 });
  }

  handleRestarNumero(){
    {/* Ejercicio 1  - this.setState({numero: this.state.numero -1});*/}
    {/*Ejercicio 2*/}
    this.setState({estado: false});
  }

  handleRestaurarNumero(){
    this.setState({estado:true});
  }

  render() {
    return (
      <div>
        { this.state.estado && <Label numero={this.state.numero} />}
        <Button cambiarNumero={this.handleCambiarNumero.bind(this)} />
        <Button restaurarNumero={this.handleRestaurarNumero.bind(this)} />
        <ButtonRestar restarNUmero={this.handleRestarNumero.bind(this)}/> <br />
        <Texto estadoNumero={this.state.numero} />
      </div>
    );
  }
}

class Texto extends Component {
  render(){

    let estadoActual = "";

    if(this.props.estadoNumero === 0){
      estadoActual= "cero";
    }else if(this.props.estadoNumero< 0){
      estadoActual = "negativo"
    }else{
      estadoActual = "positivo"
    }

    return(
      <p>{estadoActual}</p>
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
      <div>
        <button onClick={this.props.cambiarNumero}>Sumar</button>
        <button onClick={this.props.restaurarNumero}>Restaurar</button>
      </div>
    );
  }
}
ReactDOM.render(<SimpleApplication />, content);

{/* Version  de desmontado 1

  setTimeout(function(){ReactDOM.unmountComponentAtNode(content)}, 5000);
  setTimeout(function(){ReactDOM.render(<SimpleApplication />, content)}
  , 10000);

  /*
    constructor(props){
      super(props);
      this.numChanges = 0;
    }

    componentWillMount(){
      alert('ComponentWIllMount');
    }
    componentDidMount(){
      console.log('ComoponentDidMount');
    }
    compomentWillRecieveProps(nextProps){
      this.numChanges++;
      console.log('will receive', this.numChanges, "veces");
      console.log(nextProps, this.props);
    }
    shouldComponentUpdate(nextProps,nextState){
      console.log('Should????');
      return true;
    }
    componentWillUpdate(nextProps, nextStage){
      alert('WILL uPDATE');
    }
    componentDidUpdate(prevProps, prevStage){
      alert('DIIIID');
    }
  */
}
