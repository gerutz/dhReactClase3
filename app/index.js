import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleApplication extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }//end constructor

  render() {
    return (
      <div>
            <Label  />
            <Texto />
            <Button />
      </div>
    );
  }

}//end SimpleApplication

class Label extends Component {

  render () {
    return(
      <div>
        <label>DEMO</label>
      </div>
    );
  }
}

class Texto extends Component {

  render(){
    return(
      <div>
        <p>Demo texto</p>
      </div>
    );
  }
}

class Button extends Component {

  render(){
    return(
      <button type="submit">Enviar</button>
    );
  }
}

ReactDOM.render(<SimpleApplication />, content);
