import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NavAppBar from './AppBar.js';
import css from '../App.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
    <div>
      <NavAppBar title="Log In"/>

      <MuiThemeProvider>
        <div align="center" className="login-form">
          {/* <AppBar title="Login"/> */}

          <TextField hintText="Enter your Username" floatingLabelText="Username" />
          <br/>
          <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" />
          <br/>
          <RaisedButton label="Submit" primary={true} style={style} />
        </div>
      </MuiThemeProvider>
    </div>);
  }
}
const style = {
  margin: 15
};
