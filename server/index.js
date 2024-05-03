const express= require("express");
const mongodb= require("mongoose");
const cors= require("cors");

const dbconnect= require("./config/database");
const app= express();
const router= require("./router/route");


dbconnect();

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);
app.listen(3001,()=>{
    console.log("Server has started successfully");
})