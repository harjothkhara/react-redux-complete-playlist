import React, { Component } from 'react';
import Ninjas  from './Ninjas.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :)</p>
        <Ninjas name="Ryu" age="25" belt="black" />
        <Ninjas name="Yoshi" age="30" belt="black" />
      </div>
    );
  }
}

export default App;
