const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongodb connection successful");
})

const CustomerRouter = require("./routes/Customers.js");
app.use("/customer", CustomerRouter);

const SellerRouter = require("./routes/Sellers.js");
app.use("/seller", SellerRouter);

const itemRouter = require("./routes/items.js");
app.use("/item", itemRouter);

app.listen(PORT, () => {
    console.log("server is up and runing on port:" + PORT);

})