import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user,setUser]=useState({})

   const hanldeAddUser=(event)=>{
    event.preventDefault();
    console.log(user);

    fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged){
            alert('User added successfully');
            event.target.reset();
        }
        console.log(data)
    })
   
}
   
   const handleNameBlur=event=>{
    const name=event.target.name
    const value=event.target.value
    const newUser={...user}
    newUser[name]=value
    setUser(newUser)
    
   }
   

    return (
        <div>
            <h3>Please  Add a new user</h3>
            <form onSubmit={hanldeAddUser}>
                <input onBlur={handleNameBlur} type="text" name='name' placeholder='name' required/>
                <br />
                <input onBlur={handleNameBlur} type="text" name='address' placeholder='address' required/>
                <br />
                <input onBlur={handleNameBlur} type="email" name='email' placeholder='email' required/>
                <br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;