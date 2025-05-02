import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {
  const [form, setForm] = useState({ name: '', role: '', email: '', image: null });

  const handleChange = e => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('role', form.role);
    data.append('email', form.email);
    data.append('image', form.image);

    await axios.post('http://localhost:5000/api/members', data);
    alert('Member added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="role" placeholder="Role" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;
