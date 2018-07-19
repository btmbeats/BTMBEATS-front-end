import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'


const API = 'http://localhost:3000'




export default class Register extends React.Component {

  postUser = async (data) => {
    // console.log(data, "i'm going to post this")
    let response = await fetch(`${API}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        //token here
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      this.setState({token: json.token})
      this.props.onSuccess(json.token)

      this.props.history.push('/Home')
      console.log( this.state.token);
      //redirect to homepage
    } else {
      console.log('Couldn\'t Post New User: ', response.status)
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    let newUser = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      date_of_birth:e.target.date_of_birth.value,
      email_address: e.target.email_address.value,
      password: e.target.password.value,
      artist_name: e.target.artist_name.value,
      location: e.target.location.value,
      avatar: e.target.avatar.value,
      bio: e.target.bio.value,
      soundcloud: e.target.soundcloud.value,
      google: e.target.google.value,
      facebook: e.target.facebook.value,
      instagram: e.target.instagram.value
    }

    this.postUser(newUser)



  }


  render() {
    return (<div>
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
        <div>
          <AppBar title="Create a Profile"/>
          <TextField name="first_name" hintText="Enter your First Name" floatingLabelText="First Name"/>
          <br/>
          <TextField name="last_name" hintText="Enter your Last Name" floatingLabelText="Last Name"/>
          <br/>
          <TextField name="date_of_birth" hintText="Enter your date of birth" floatingLabelText="Date of Birth"/>
          <br/>
          <TextField name="email_address" hintText="Enter your email address" type="email" floatingLabelText="Email"/>
          <br/>
          <TextField name="password" type="password" hintText="Enter your Password" floatingLabelText="Password"/>
          <br/>
          <TextField name="artist_name" hintText="Enter your Artist Name" floatingLabelText="Artist Name"/>
          <br/>
          <TextField name="location" hintText="Enter your Location" floatingLabelText="Location"/>
          <br/>
          <TextField name="avatar" hintText="Select an avatar" floatingLabelText="Avatar"/>
          <br/>
          <TextField name="bio" hintText="Write a quick bio about yourself" floatingLabelText="Bio"/>
          <br/>
          <TextField name="soundcloud" hintText="Add a link to your Soundcloud" floatingLabelText="Soundcloud"/>
          <br/>
          <TextField name="google" hintText="Add your Google " floatingLabelText="Google"/>
          <br/>
          <TextField name="facebook" hintText="Link your Facebook account" floatingLabelText="Facebook"/>
          <br/>
          <TextField name="instagram" hintText="Link your Instagram account" floatingLabelText="Instagram"/>
          <br/>
          <RaisedButton type="submit" label="Submit" primary={true} style={style} />
        </div>
      </form>
      </MuiThemeProvider>
    </div>);
  }
}
const style = {
  margin: 15
};
