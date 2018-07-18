import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class Register extends React.Component {

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

    this.props.postTrack(newTrack)
  }


  render() {
    return (<div>
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
        <div>
          <AppBar title="Create a Profile"/>
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
