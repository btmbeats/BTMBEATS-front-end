import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';

const API = 'http://localhost:3000'


export default class Register extends React.Component {

  postTrack = async (data) => {
    console.log(data, "i'm going to post this")
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
      this.props.onSuccess(json.token)
      this.props.history.push('/Home')
    } else {
      console.log('Couldn\'t Post New track: ', response.status)
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    let newTrack = {
      title: e.target.title.value,
      cover: e.target.cover.value,
      desc:e.target.desc.value,
      track_url: e.target.track_url.value,
      duration: e.target.duration.value,
      tempo: e.target.tempo.value,
      price: e.target.price.value,
    }

    this.postTrack(newTrack)

  }


  render() {
    return (<div>
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
        <div>
          <AppBar title="Upload a Track"/>
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
          <input name="fileupload" type="file" id="fileupload" hintText="Upload your beat" />
          <br/><br/>
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
