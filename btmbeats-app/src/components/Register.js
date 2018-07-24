import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'


const API = 'https://btmbeats.herokuapp.com'

export default class Register extends React.Component {

  postUser = async (data) => {
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
      this.setState({token: json.token})
      this.props.history.push('/Profile')
    } else {
      console.log('Couldn\'t Post New User: ', response.status)
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      artist_name: e.target.artist_name.value,
      email_address: e.target.email_address.value,
      password: e.target.password.value
    }
    this.postUser(newUser)
  }

  render() {
    return (<div>
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <div>
            <AppBar title="Create a Profile"/>
            <TextField name="artist_name" hintText="Enter your Artist Name" floatingLabelText="Artist Name"/>
            <br/>
            <TextField name="email_address" hintText="Enter your email address" type="email" floatingLabelText="Email"/>
            <br/>
            <TextField name="password" type="password" hintText="Enter your Password" floatingLabelText="Password"/>
            <br/>
            <RaisedButton type="submit" label="Submit" primary={true} style={style}/>
          </div>
        </form>
      </MuiThemeProvider>
    </div>);
  }
}
const style = {
  margin: 15
};
