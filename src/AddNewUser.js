import React, { useState } from 'react';

export function AddNewUser(props) {
  const [id, setId] = useState();
  const [name, setName] = useState();

  return (
    <div>
      <h2>Add a new user</h2>
      <input
        placeholder="ID"
        type="text"
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button>Add New User</button>
    </div>
  );
}
