import React, { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import UserList from './components/userList/UserList';
const startObj = [
  {
    id: 1,
    name: 'John',
    age: 18
  },
  {
    id: 2,
    name: 'Peter',
    age: 12
  }
]
function App() {
  const [initialState, setInitialState] = useState(startObj)
  const addNewUserHandler =(newUser)=>{
    setInitialState((prevState)=>{
      return[
        newUser,...prevState
      ]
    })
  }
  return (
    <div className="container">
      <Form addNewUser={addNewUserHandler}></Form>
      <UserList initialState={initialState}></UserList>
    </div>
  );
}

export default App;
