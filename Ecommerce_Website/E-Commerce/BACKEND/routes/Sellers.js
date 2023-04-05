const router = require("express").Router();
let seller = require("../models/seller");

router.route("/addseller").post((req,res)=> {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newseller = new seller({
        name,
        email,
        password
    })

    newseller.save().then(()=>{
        res.json("seller added")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;