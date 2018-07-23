import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import ButtonAppBar from './AppBar.js';
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

const HomePage = (props) => {
  const {classes, theme, users} = props;
  if (props.state.users.length > 0) {
    console.log(props.state.users[0].artist_name)
  }

  return (<div>
    <ButtonAppBar {...props } title="Create a Profile"/>

    <div className = "welcome-div" >

      <h2>Welcome to BTM Beats</h2>

      {/* <button onClick={() => props.history.push('/login')}>
      Log In
    </button> */
      }

      {/* <Button variant="contained" size="small" className={classes.button} onClick={() => props.history.push('/login')}>
        Log In
    </Button> */
      }

      {/* <button onClick={() => props.history.push('/register')}>
    Register
  </button> */
      }

      {/* <Button variant="contained" size="small" className={classes.button} onClick={() => props.history.push('/register')}>
      Join For Free
  </Button> */
      }
      <h4>
        Login or Register to download tracks!
      </h4>

      <h3>
        Track Library
      </h3>


    </div>
    {

      props.state.tracks.map((track, i) => (<div key={track.id}>
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
          <CardMedia className={classes.cover} image="/static/images/cards/live-from-space.jpg" title="Live from space album cover"/>
        </Card>

      </div>))
    }

  </div>)

}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(HomePage);
