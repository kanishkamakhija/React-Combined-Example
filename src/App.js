import React, { Component } from 'react';
import './App.css';
import VideoGameComponent from './VideoGameComponent.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	users : [],
  }

updateUserList = (user) => {
  this.setState((currState) => ({users : [...currState.users, user]})) 
}

  render() {
    return (
      <div className="mainContainer">
      <VideoGameComponent  updateUserList={this.updateUserList} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
