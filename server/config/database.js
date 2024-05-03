const mongoose= require("mongoose");

const dbconnect=()=>{
    mongoose.connect("mongodb://localhost:27017")
    .then(()=>{
        console.log("Connection has been made successfully");
    })
    .catch((err)=>{
        console.log(err);
        process.exit(1);
    })
}

module.exports= dbconnect;