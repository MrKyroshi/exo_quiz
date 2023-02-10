import React from 'react';
import { useState, useEffect } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>response.json())
        .then((data)=> setUsers(data))
        .catch((error) => console.log('error'));
    },[])
  return (
    <div>
        <ul>
            {users.map((user) =>( 
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}
