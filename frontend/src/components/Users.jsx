import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Could not fetch users from backend.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading users, please wait...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="users-container">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <h2>{user.name}</h2>
          <p className="role">{user.role}</p>
          <p className="email">✉️ {user.email}</p>
          <p className="location">📍 {user.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
