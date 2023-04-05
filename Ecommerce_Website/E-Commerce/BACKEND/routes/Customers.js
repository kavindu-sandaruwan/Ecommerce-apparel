const router = require("express").Router();
let customer = require("../models/index");

router.route("/add").post((req,res)=> {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newcustomer = new customer({
        name,
        email,
        password
    })

    newcustomer.save().then(()=>{
        res.json("Customer added")
    }).catch((err)=>{
        console.log(err);
    })
})



// router.route("/").get((_req, res)=>{
//     customer.find().then((customers)=>{
//         res.json(customers)
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

module.exports = router;