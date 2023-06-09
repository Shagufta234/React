import React, {  useState } from 'react'

const Api = () => {
  const [users, setUsers] = useState([]);

  const user = { 
    firstName: 'Muhammad',
     lastName: 'Ovi', 
     age: 250,
      /* other user data */ 
    }; 
    fetch('https://dummyjson.com/users/add', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
     })
      .then(response => response.json()) 
      .then(data => { 
        // Process the response after adding the user 
        console.log('Added user:', data); 
    }) 
    .catch(error => { 
        console.error('Error adding user:', error);
     });
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Api
