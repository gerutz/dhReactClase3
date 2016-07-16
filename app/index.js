import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {

  render() {
    return (
      <div>
        <Label />
        <Button operacion="sumar"/>
        <Button operacion="resta"/>
      </div>
    );
  }
}

class Label extends Component {
  render (){
    return (
      <div>
        <label>El valor del contador es </label>
      </div>
    );
  }
}

class Button extends Component {
  render () {
    return (
      <div>
        <input type="button" value={this.props.operacion}/>
      </div>
    );
  }
}
ReactDOM.render(<SimpleApplication />, content);
