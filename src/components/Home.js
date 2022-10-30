import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users=useLoaderData()
    const [displayUser,setDisplayUser]=useState(users)
    // console.log(displayUser)
    const handleDelete=(user)=>{
        const agree=window.confirm(`are you sure you want to delete ${user.name}`);
        console.log(agree);
        if(agree){
            // console.log('deleting user',user._id);
            fetch(`http://localhost:5000/users/${user._id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                alert('User deleted successfully')
                const remaining=displayUser.filter(usr => usr._id !== user._id)
                setDisplayUser(remaining)
               } 
               console.log(data)
            })
        }
    }
    return (
        <div>
            <h3>This is home :{displayUser.length}</h3>
            <div>
                {
                    displayUser.map(user=> <p key={user._id}>{user.name} {user.email} 
                    <button onClick={()=> handleDelete(user)}>X</button>
                    <Link to={`/update/${user._id}`}><button>update</button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};
 
export default Home;