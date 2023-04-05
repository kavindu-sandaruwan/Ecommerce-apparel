const router = require("express").Router();
let item = require("../models/item");

router.route("/additem").post((req,res)=> {
    
    const name = req.body.name;
    const catagory = req.body.catagory;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    

    const newitem = new item({
        name,
        catagory,
        image,
        price,
        description
    })

    newitem.save().then(()=>{
        res.json("item added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/getitems").get((_req, res)=>{
    item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;