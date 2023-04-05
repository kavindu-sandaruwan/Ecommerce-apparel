import React from 'react'
// import validation from './validation';
import { useState } from 'react';
import axios from "axios";

export default function CusRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function senddata(e){
        e.preventDefault();
        
        const newcustomer = {
            name,
            email,
            password
        }
        
        axios.post("http://localhost:8070/customer/add", newcustomer).then(()=>{
            alert("customer added")
        }).catch((err)=>{
            alert(err)
        })
    }

    
    // const [values, setValues] = useState({name:'',email:'',password:''})
    // const [errors, setErrors] = useState({})
    
    // function handleInput(event){
    //     const newobj = {...values,[event.target.name]: event.target.value}
    //     setValues(newobj)
    // }

    // function handlevalidation(event){
    //     const newobj = {...values,[event.target.name]: event.target.value}
    //     setValues(newobj)

    //     event.preventDefault();
    //     setErrors(validation(values));

    return(
        <div>
            <div>

        <center>
        <h1>Name..</h1>
        <hr size="2" width="25%" color="black"></hr>
        <h4>Customer Register Form</h4>

        <form className='form' action='post' onSubmit={senddata}>


        <table>
        <tr>
        <td>Name : </td>
        <td><input type='text' placeholder='Enter Name' name='name' onChange={(e)=>{setName(e.target.value);}}></input></td>
        </tr>
        {/* {errors.name && <p style={{color: "red"}}>{errors.name}</p>} */}
        <br/>
    
        <tr>
        <td>Email: </td>
        <td><input type='Email' placeholder='Enter Email' name='email'onChange={(e)=>{setEmail(e.target.value);}}></input></td>
        </tr>
        {/* {errors.email && <p style={{color: "red"}}>{errors.email}</p>} */}
        <br/><br/>

        <tr>
        <td>PassWord : </td>
        <td><input type='password' placeholder='Enter Password' name='password' onChange={(e)=>{setPassword(e.target.value);}}></input></td>
        </tr>
        {/* {errors.password && <p style={{color: "red"}}>{errors.password}</p>} */}
        <br/><br/>

        {/* <tr>
        <td>Confirm-PassWord : </td>
        <td><input type='password' placeholder='confirm your Password' name='con_password'></input></td>
        </tr>
        <br/><br/> */}

        <tr>
        <td><input type='submit' class='BTN' value='Register'></input></td>
        </tr>
        </table>

        </form>
        </center>
            </div>
        </div>
    )}
