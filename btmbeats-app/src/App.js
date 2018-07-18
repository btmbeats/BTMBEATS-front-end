import React, { Component } from 'react';

import Register from './components/Register'
import TrackUpload from './components/TrackUpload'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';



// import MessageList from './components/MessageList'
const API = 'http://localhost:3000'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      formHidden: 'hidden',
      user: {},
      tracks: [],
      token: ''
    }
  }

  async componentDidMount() {
    const users = await fetch(`${API}/users`).then(rawRes => rawRes.json())
    const tracks = await fetch(`${API}/tracks`).then(rawRes => rawRes.json())

    console.log(users, tracks);

    this.setState({ users, tracks })

    // const tracksRes = await fetch(`${API}/tracks`)
    // if (response.status === 200) {
    //   const json = await response.json()
    //   console.log("JSON " ,json);
    //   // const json2 = await response.json()
    //   this.setState({
    //     users: json,
    //     tracks: json
    //   })
    // } else {
    //   console.log('Couldn/t fetch json', response.status);
    // }
  }


  postUser = async (data) => {
    // console.log(data, "i'm going to post this")
    let response = await fetch(`${API}/users`, {
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
        ...this.state,
        token: json.token
        //adjust this so something changes on registration form submit
      })

    } else {
      console.log('Couldn\'t Post New User: ', response.status)
    }

  }



  postTrack = async (data) => {
    console.log(data, "i'm going to post this")
    let response = await fetch(`${API}/tracks`, {
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
      console.log('Couldn\'t Post New track: ', response.status)
    }

  }

  // composeToggle = () => {
  //       this.state.formHidden === 'hidden' ?
  //       this.setState({formHidden: ''}) :
  //       this.setState({formHidden: 'hidden'})
  //   }



  render() {
    // console.log("Users ", this.state.users, "Tracks ", this.state.tracks);
    return (
      <Router>
        <div className="container">
          {/* <Login/> */}

          <Route path='/' exact component={HomePage} />
          <Route path='/register' render={() => <Register postUser={this.postUser} />} />



          {/* {this.state.tracks.map(track => (
            <div key={track.id}>{track.title}</div>
          ))}

          {this.state.users.map(users => (
            <div key={users.id}>{users.first_name}</div>
          ))} */}
          {/* <TrackUpload postTrack={this.postTrack}/> */}
        </div>
      </Router>
      );
    }
  }

  export default App;
