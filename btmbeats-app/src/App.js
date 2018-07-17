
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
    formHidden: 'hidden',
    user: {}
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

postUser = async (data) => {
  console.log(data, "i'm going to post this")
    let response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      this.setState({
        ...this.state.formHidden,
        
      })
    } else {
      console.log('Couldn\'t Post New User: ', response.status)
    }

  }

// composeToggle = () => {
//       this.state.formHidden === 'hidden' ?
//       this.setState({formHidden: ''}) :
//       this.setState({formHidden: 'hidden'})
//   }



render() {
  console.log(this.state.users);
  return (
    <div className="container">
      {/* <Login/> */}
      <Register postUser={this.postUser}/>
    </div>
  );
}
}

export default App;
