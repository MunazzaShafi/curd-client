import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser(){
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate =useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("https://curd-9w28.onrender.com/createUser",{name,email,age})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=> console.log(err))
    }

    return(
        <div className="d-flex bg-primary justify-content-center align-items-center vh-100">
            <div className="w-50 bg-white p-3 rounded">
                
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name"  onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default CreateUser;