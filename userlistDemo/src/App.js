import './App.css';
import { Fragment, useEffect, useState } from 'react';
import * as userService from './services/userService';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { UserList } from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAllUsers()
    .then(setUsers)
    .catch(err => {
      console.log(`Error` + err)
    })
  }, []);
  
  const onUserCreate = async (event) => {
    // stop automatic form submit
    event.preventDefault();
    // Take form data from DOM tree
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    // Send AJAX request to server
    const createdUser = await userService.createUser(data)
    // If succesfull send new user to the state
    setUsers( state => [...state, createdUser]);
  };
  const onDeleteClick = async (userId) => {
    
    
    // Delete from server
    
    // Delete from state

  }


  return (
  <Fragment>
    <Header />
    <main className="main">
      <section className="card users-container">

        <Search />
        <UserList 
          users={users} 
          onUserCreate={onUserCreate}
          onDeleteClick={onDeleteClick}
         />
      </section>
    </main>
    <Footer/>
  </Fragment>
  );
}

export default App;
