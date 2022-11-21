import React from 'react';
import { AddNewUser } from './AddNewUser';
import './style.css';

const users = [
  {
    id: 1,
    name: 'ram',
  },
  {
    id: 2,
    name: 'kris',
  },
  {
    id: 3,
    name: 'john',
  },
];
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {users.map((user) => (
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>_______________________________</p>
        </div>
      ))}
      <AddNewUser />
    </div>
  );
}
