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
  console.log(this.state.value);
}

render() {
  return (
    <div>
        <Input inputValueDefault = {this.state.value}
               valueChange = {this.handleValueChange.bind(this)}
        />
    </div>
  );
}

}//end SimpleApplication

export default class Input extends Component {
  render (){

    return (
      <div>
        <input type="text" value = {this.props.inputValueDefault} onChange = {this.props.valueChange} />
      </div>
    );
  }

}


ReactDOM.render(<SimpleApplication />, content);
