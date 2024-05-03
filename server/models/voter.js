const mongoose=require("mongoose");

const voterSchema= new mongoose.Schema({
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
    }
})

const VoterSchema= mongoose.model("VoterSchema", voterSchema);
module.exports=VoterSchema;