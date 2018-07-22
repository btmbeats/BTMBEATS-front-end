import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


const HomePage = (props) => {
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
        <ul>
          <li>
            <h3>Title: {track.title}
            </h3>
          </li>
          <h4>
            Length: {track.duration}
          </h4>
        </ul>

      </div>))
    }

  </div>)
}

export default HomePage;
