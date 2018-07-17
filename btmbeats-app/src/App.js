
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
// import MessageList from './components/MessageList'
const API = 'https://btmbeats.herokuapp.com/users/'


class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    users: [],
    formHidden: 'hidden'
  }
}

async componentDidMount() {
  const response = await fetch(API)
  if (response.status === 200) {
    const json = await response.json()
    this.setState({
      users: json
    })
  } else {
    console.log('Couldn/t fetch json', response.status);
  }
}

composeToggle = () => {
      this.state.formHidden === 'hidden' ?
      this.setState({formHidden: ''}) :
      this.setState({formHidden: 'hidden'})
  }



render() {
  console.log(this.state.users);
  return (
    <div className="container">
      {/* <Login/> */}
      <Register/>
    </div>
  );
}
}

export default App;
