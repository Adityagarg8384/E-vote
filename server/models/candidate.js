const mongoose=require("mongoose");

const candidateSchema= new mongoose.Schema({
    firstname:{
        type: String,
        require:true,
    },
    lastname:{
        type: String,
        require:true,
    },
    addharnumber:{
        type: String,
        require:true,
    },
    phonenumber:{
        type: String,
        require:true,
    },
    vote:{
        type: Number,
        require: true,
        default :1,
    }
})

const CandidateSchema= mongoose.model("CandidateSchema",candidateSchema );
module.exports=CandidateSchema;
