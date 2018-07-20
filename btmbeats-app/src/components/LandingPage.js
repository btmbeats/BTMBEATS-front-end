import React from 'react';

// import { withRouter } from 'react-router-dom';

const LandingPage = (props) => {
  // console.log(props);

  return (

  <div>
    <h2>Welcome Burnsidion</h2>

    <h3> Your track Library </h3>
    {props.state.tracks.map(track => (
      <div key={track.id}>{track.title}</div>))}
  </div>


  )
}

export default LandingPage;
