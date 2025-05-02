import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container homepage">
    <h2>Welcome to Our Team Page!</h2>
    <p>Manage your team members easily.</p>
    <div>
      <Link to="/add"><button>Add Member</button></Link>
      <Link to="/members"><button>View Members</button></Link>
    </div>
  </div>
);

export default Home;
