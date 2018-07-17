import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (<div>
      <MuiThemeProvider>
        <div>
          <AppBar title="Create a Profile"/>
          <TextField hintText="Enter your First Name" floatingLabelText="First Name"/>
          <br/>
          <TextField hintText="Enter your Last Name" floatingLabelText="Last Name"/>
          <br/>
          <TextField hintText="Enter your Email" type="email" floatingLabelText="Email"/>
          <br/>
          <TextField type="password" hintText="Enter your Password" floatingLabelText="Password"/>
          <br/>
          <RaisedButton label="Submit" primary={true} style={style}/>
        </div>
      </MuiThemeProvider>
    </div>);
  }
}
const style = {
  margin: 15
};
