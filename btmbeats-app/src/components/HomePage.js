import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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
  const {classes, theme} = props;
  // console.log("PROPS", props);

  return (<div>
    <h2>Welcome to BTM Beats</h2>

    <button onClick={() => props.history.push('/login')}>
      Log In
    </button>

    <button onClick={() => props.history.push('/register')}>
      Register
    </button>

    <h3>
      Track Library
    </h3>

    <h4>
      Login or Register to download tracks!
    </h4> 

    {
      props.state.tracks.map(track => (<div key={track.id}>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">Live From Space</Typography>
              <Typography variant="subheading" color="textSecondary">
                Mac Miller
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
