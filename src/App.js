import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import Deck from './Deck'
import JokeList from './JokeList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <GithubUserInfo username="Elie"/> */}
        <Deck />
        {/* <JokeList /> */}
      </div>
    );
  }
}

export default App;
