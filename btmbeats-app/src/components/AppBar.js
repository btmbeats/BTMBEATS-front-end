import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import css from '../App.css'


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 40,
  },

};

function NavAppBar(props) {
  const { classes } = props;
  return (
    <div className='app-bar-div'>
    <div className={classes.root} color="primary">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <img width="100" height="50" src="http://bridgingthemusic.com/wp-content/uploads/2014/08/btm-white.png"/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            btm beats
          </Typography>
          <Button color="inherit" onClick={() => props.history.push('/register')}>join for free</Button>
          <div className="button-spacing"></div>
          <Button color="inherit" onClick={() => props.history.push('/login')}>log in</Button>
        </Toolbar>
      </AppBar>
    </div>
  </div>
  );
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavAppBar);
