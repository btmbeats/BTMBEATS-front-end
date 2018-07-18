import React from 'react';

// import { withRouter } from 'react-router-dom';

const HomePage = (props) => {
  console.log(props);

  return (
  <div>
    <h2>Home</h2>

    <button onClick={() => props.history.push('/login')}>
      Log In
    </button>

    <button onClick={() => props.history.push('/register')}>
      Register
    </button>
  </div>
  )
}

export default HomePage;
