import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data))
      .catch(err => console.error('Error fetching members:', err));
  }, []);

  return (
    <div className="container">
      <h2>Team Members</h2>
      {members.map(member => (
        <div className="member-card" key={member._id}>
          <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
          <div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/members/${member._id}`}><button>View Details</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewMembers;
 
