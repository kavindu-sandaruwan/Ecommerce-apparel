import React, { useState } from 'react'
import axios from "axios";

export default function AddItem() {

    // const [data, setData] = useState({
    //     name : "",
    //     catagory : "",
    //     image : "",
    //     price : "",
    //     description : ""

    // })

    // const handleonChange = (e) => {
    //     const {name,value} = e.target
    //     setData((preve) => {
    //         return{
    //             ...preve,
    //             [name] : value
    //         }
    //     })
    // }

    // const uploadimage = async(e) =>{
    //     // console.log(e.files)

    //     const data = await uploadimage(e.target.files[0])
    //     // console.log(data)

    //     setData((preve)=>{
    //         return{
    //             ...preve,
    //             image : data
    //         }
    //     })
    // }
   
    // const handlesubmit = async(e) => {
    //     e.preventDefault()
    //     console.log(data)
 

        // const fetchdata = await fetch ('${process.env.URL}/item', {
        //     method : "post",
        //     headers : {
        //         "content-type" : "application/json"
        //     },
        //     body : JSON.stringify(data)
        // })

        // const fetchRes = await fetchdata.json()

        // console.log(fetchRes)

    //     axios.post("http://localhost:8070/item/additem", data).then(()=>{
    //         alert("item added")
    //     }).catch((err)=>{
    //         alert(err)
    //     })
    // }


    const [name, setName] = useState("");
    const [catagory, setCatagory] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    function senddata(e){
        e.preventDefault();
        
        const newitem = {
            name,
            catagory,
            image,
            price,
            description
        }
        
        axios.post("http://localhost:8070/item/additem", newitem).then(()=>{
            alert("item added")
        }).catch((err)=>{
            alert(err)
        })
    }


    return(
        <div>
            <div>

        <center>
        <h1>Name..</h1>
        <hr size="2" width="25%" color="black"></hr>
        <h4>ADD ITEM</h4>

        <form className='form' action='post' onSubmit={senddata}>


        <table>
        <tr>
        <td>Item Name : </td>
        <td><input type='text' placeholder='Enter the Item Name' name='name' onChange={(e)=>{setName(e.target.value);}}></input></td>
        </tr>
        <br/>
    
        <tr>
        <td>catagory: </td>
        <td><select onChange={(e)=>{setCatagory(e.target.value);}} name='catagoory'>
            <option value='0'>Select the catagory</option>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
            <option value='kids'>Kids</option>
            </select></td>
        </tr>
        <br/><br/>

        <tr>
        <td>Add photo : </td>
        <td><input type='file' placeholder='Add the image' name='image' onChange={(e)=>{setImage(e.target.value);}}></input></td>
        </tr>
        <br/><br/>

        <tr>
        <td>Price : </td>
        <td><input type='number' placeholder='Enter The Price' name='price' onChange={(e)=>{setPrice(e.target.value);}}></input></td>
        </tr>
        <br/><br/>

        <tr>
        <td>Description : </td>
        <td><input type='text' placeholder='Enter The Description' name='description' onChange={(e)=>{setDescription(e.target.value);}}></input></td>
        </tr>
        <br/><br/>

        <tr>
        <td><input type='Submit' class='BTN' value='Add' ></input></td>
        </tr>
        </table>

        </form>
        </center>
            </div>
        </div>
    )
}