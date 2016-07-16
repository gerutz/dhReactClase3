import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {


  render() {
    return (
      <div>
        <h1>Hola</h1>
      </div>
    );
  }
}


ReactDOM.render(<SimpleApplication />, content);
