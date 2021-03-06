import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import NavAppBar from './AppBar.js';
import css from '../App.css'

const API = 'https://btmbeats.herokuapp.com'

export default class Register extends React.Component {

  postTrack = async (data) => {
    let response = await fetch(`${API}/tracks`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      this.props.onSuccess(data)
      this.props.history.push('/Profile')
    } else {
      console.log('Couldn\'t Post New track: ', response.status)
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newTrack = {
      title: e.target.title.value,
      cover: e.target.cover.value,
      desc: e.target.desc.value,
      track_url: e.target.track_url.value,
      duration: e.target.duration.value,
      tempo: e.target.tempo.value,
      price: e.target.price.value
    }

    this.postTrack(newTrack)

  }

  render() {
    return (
      <div>

      <NavAppBar title="Upload Beats" />

      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <div align="center" className="upload-form">
            <TextField name="title" hintText="Enter track title" floatingLabelText="Title"/>
            <br/>
            <TextField name="cover" hintText="Upload cover art" floatingLabelText="Cover Art"/>
            <br/>
            <TextField name="desc" hintText="Brief description of track" floatingLabelText="Track Description"/>
            <br/>
            <TextField name="track_url" hintText="Upload track url" floatingLabelText="Track URL"/>
            <br/>
            <TextField name="duration" hintText="Length of track" floatingLabelText="Duration"/>
            <br/>
            <TextField name="tempo" hintText="Tempo of track" floatingLabelText="Tempo"/>
            <br/>
            <TextField name="price" hintText="Price to purchase track" floatingLabelText="Price"/>
            <br/><br/>
            <Input name="fileupload" type="file" />
            <br/><br/>
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
