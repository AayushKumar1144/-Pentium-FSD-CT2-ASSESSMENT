import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data));
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <div>
      <h2>{member.name}</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} width="200" alt="" />
      <p>Role: {member.role}</p>
      <p>Email: {member.email}</p>
    </div>
  );
};

export default MemberDetails;
