import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {

  constructor(props){
    super(props);

    this.state = {
      estado : true
    }
  }//end constructor

  handleBorrarMensaje () {
    this.setState({estado:false});
    return this.state.estado;
  }

  handleMostarMensaje () {
    this.setState({estado:true});
    return this.state.estado;
  }

  render() {

    return (

      <div>
            <Label  estadoActual = {this.state.estado} />
            <Button borrarMensaje = {this.handleBorrarMensaje.bind(this)}
                    mostrarMensaje = {this.handleMostarMensaje.bind(this)} />

      </div>

    );
  }//end render
}//end SimpleApplication

class Label extends Component {

  render () {

    let estado = this.props.estadoActual;
    console.log("el estado es :" + estado);
    let clase = "";


    if(estado){
        clase = "inline";
    }else{
        clase = "none";
    }

    return(
      <div>
        <span style = {{display : clase }}> Hola </span>
      </div>
    );
  }
}// en Label

class Button extends Component {

  render(){
    return(
      <div>
        <button type="submit" onClick = {this.props.borrarMensaje}>Borrar</button>
        <button type="sumbit" onClick = {this.props.mostrarMensaje}>Mostrar </button>
      </div>
    );
  }
}

ReactDOM.render(<SimpleApplication />, content);
