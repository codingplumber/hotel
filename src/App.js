import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Res from './components/Res/Res';
import Confirmation from './components/Confirmation/Confirmation';


// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route path='/' exact component={Home} />
          <Route path='/reservations' component={Res} />
          <Route path='/confirmation' component={Confirmation} />
        </div>     
      </BrowserRouter>
    );
  }
}

export default App;
