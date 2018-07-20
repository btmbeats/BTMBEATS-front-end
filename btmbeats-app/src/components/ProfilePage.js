import React from 'react';

// import { withRouter } from 'react-router-dom';

const ProfilePage = (props) => {
  console.log("PROPS", props);

  return (<div>
    <h2>Welcome Burnsidion</h2>

    <h3>
      Your track Library
    </h3>
    {
      props.state.tracks.map((track, i) => (<div key={i}>
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

export default ProfilePage;
