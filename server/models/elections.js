const mongoose=require("mongoose");

const electionSchema= new mongoose.Schema({
    totalvote:{
        type: Number,
        require:true,
        default:0,
    }
})

const ElectionSchema= mongoose.model("ElectionSchema", electionSchema);
module.exports=ElectionSchema;