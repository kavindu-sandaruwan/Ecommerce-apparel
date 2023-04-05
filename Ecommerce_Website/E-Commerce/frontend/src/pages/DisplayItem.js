import axios from 'axios';
import React, { useEffect } from 'react'
// import validation from './validation';
import { useState } from 'react';
// import axios from 'axios';


export default function DisplayItem() {


const [items, setItems] = useState([]);

useEffect(() => {
    function getitem() {
        axios.get("http://localhost:8070/item/getitems").then((res) => {
            // setItems(res.data);
            console.log(res);
        }).catch((err) => {
            alert(err.massage);
        })
    }
    getitem();
},[])
        
    
    // return(
    //     <div>
    //         <div>
    //             <table>
    //                 <tr>id</tr>
    //                 <tr>name</tr>
    //                 <tr>catagory</tr>
    //             </table>

      
    //             {items.map((item)=>
    //             <table id = {item.id}
    //             name={item.name}
    //             catagory={item.catagory}
    //             />
    //             )}
        
        
    //         </div>
    //     </div>
    // )
}
