import React, {Component} from 'react'

import Register from './components/Register'
import Login from './components/Login'
import TrackUpload from './components/TrackUpload'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'

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
    // const history = createBrowserHistory()

    console.log(users, tracks)

    this.setState({users, tracks})
  }

  onSuccess = (token) => {
    // update state
    this.setState({
      ...this.state,
      token: token
    })

  }



  render() {
    // console.log("Users ", this.state.users, "Tracks ", this.state.tracks);
    return (<Router>
      <div className="container">

        <Route path='/' exact render={(props) => <HomePage { ...props } state={this.state}/>}/>

        <Route path='/TrackUpload' render={props => <TrackUpload {...props}  onSuccess={this.onSuccess}/>}/>

        <Route path='/Profile' render={(props) => <ProfilePage { ...props } state={this.state}/>}/>

        <Route path='/login' exact render={() => <Login /*postUser={this.postUser}*//>}/>

        <Route path='/register' exact render={props => <Register {...props} onSuccess={this.onSuccess} />}/>


        </div>
      </Router>);
    }
  }
export default App
