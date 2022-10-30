import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const singleUser=useLoaderData()
    const [user,setUser]=useState(singleUser)
    // console.log(singleUser);

    const hanldeUpdateUser=(event)=>{
       event.preventDefault();
    //  console.log(user);
    fetch(`http://localhost:5000/users/${singleUser._id}`,{
        method:"PUT",
        headers:{
            "content-type":'application/json'
        },

        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            alert('user updated')
        }
        // event.target.reset();
        // console.log(data);
    })

    }

    const handleInputChange=event=>{
        const name=event.target.name
        const value=event.target.value
        const newUser={...user}
        newUser[name]=value
        setUser(newUser)
        
       }
       
    return (
        <div>
            <h2>please Update information {singleUser.name}</h2>
            <form onSubmit={hanldeUpdateUser}>
                <input onChange={handleInputChange} defaultValue={singleUser.name} type="text" name='name' placeholder='name' required/>
                <br />
                <input onChange={handleInputChange} defaultValue={singleUser.address} type="text" name='address' placeholder='address' required/>
                <br />
                <input onChange={handleInputChange} defaultValue={singleUser.email} type="email" name='email' placeholder='email' required/>
                <br />
                <button type='submit'>Update User</button>
            </form>
        </div>
    );
};

export default Update;