import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
// import News from './components/News';
import Memes from './components/Memes';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Memes/>
      </div>
    )
  }
}