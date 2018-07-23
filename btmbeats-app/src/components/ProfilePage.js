import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import ButtonAppBar from './AppBar2.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import css from '../App.css'

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

const ProfilePage = (props) => {

  const {classes, theme, users} = props;
  if (props.state.users.length > 0 && props.state.tracks.length > 0) {
    // console.log(props.state.users[0].artist_name)
    console.log("tracks", props.state.tracks[1].cover);
  }

  return (<div>
    <ButtonAppBar {...props} title="Create a Profile"/>
    <div className='welcome-div'>
      <h2>
        Welcome Burnsidion
      </h2>

      <h3>
        Your track Library
      </h3>
    </div>

    <div className='card-div'>
      {
        props.state.tracks.map((track, i) => (<div className="card-wrapper" key={track.id}>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="headline">{track.title}</Typography>
                <Typography variant="subheading" color="textSecondary">
                  {props.state.users[0].artist_name}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="Previous">
                  {
                    theme.direction === 'rtl'
                      ? <SkipNextIcon/>
                      : <SkipPreviousIcon/>
                  }
                </IconButton>
                <IconButton aria-label="Play/pause">
                  <PlayArrowIcon className={classes.playIcon}/>
                </IconButton>
                <IconButton aria-label="Next">
                  {
                    theme.direction === 'rtl'
                      ? <SkipPreviousIcon/>
                      : <SkipNextIcon/>
                  }
                </IconButton>
              </div>
            </div>
            <CardMedia className={classes.cover} image={props.state.tracks[0].cover} title="Album cover"/>
          </Card>

        </div>))
      }
    </div>
  </div>)
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(ProfilePage);
