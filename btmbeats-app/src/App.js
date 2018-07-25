import React, {Component} from 'react'
import HomePage from './components/HomePage'
import Library from './components/Library'
import ProfilePage from './components/ProfilePage'
import Register from './components/Register'
import Login from './components/Login'
import TrackUpload from './components/TrackUpload'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// import MessageList from './components/MessageList'
const API = 'http://localhost:3000'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      formHidden: 'hidden',
      // user: {},
      tracks: [],
      token: ''
    }
  }

  async componentDidMount() {
    const users = await fetch(`${API}/users`).then(rawRes => rawRes.json())
    const tracks = await fetch(`${API}/tracks`).then(rawRes => rawRes.json())
    // console.log(users, tracks)
    this.setState({users, tracks})
  }

  onSuccess = (data) => {
    this.setState({
      ...this.state,
      tracks: [data, ...this.state.tracks]
    })
  }

  render() {
    // console.log("Users ", this.state.users, "Tracks ", this.state.tracks);
    return (<Router>
      <div className="container">

        <Route path='/' exact render={(props) => <HomePage { ...props } state={this.state}/>}/>

        <Route path='/Library' exact render={(props) => <Library { ...props } state={this.state}/>}/>

        <Route path='/TrackUpload' render={props => <TrackUpload {...props}  onSuccess={this.onSuccess}/>}/>

        <Route path='/Profile' render={(props) => <ProfilePage { ...props } state={this.state}/>}/>

        <Route path='/login' exact render={() => <Login />}/>

        <Route path='/register' exact render={props => <Register {...props} onSuccess={this.onSuccess} />}/>


      </div>
    </Router>);
  }
}

export default App
