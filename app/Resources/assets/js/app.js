import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}


render(<App name="Rehan Manzoor"/>, document.getElementById('app'));
