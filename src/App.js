import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response){
        setUsers(response.data);
      })
      .catch(function (error){
        setUsers([]);
      });
  }, []);
  return (
    <div className='App'>
      {users.map(user => (
        <Usercard user={user}/>
      ))}
    </div>
);
}

export default App;
