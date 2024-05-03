const VoterSchema= require("../models/voter");


const voter= async(req, res)=>{
    try{
        const firstname= req.body.firstname;
        const lastname = req.body.lastname;
        const Addharnumber= req.body.Addharnumber;
        const Phonenumber= req.body.Phonenumber;

        const response= await VoterSchema.create({firstname, lastname, Addharnumber, Phonenumber});

        return res.status(200).json({
            success:true,
            data: response,
            message: "Entered Sucessfully",
        })
    }
    catch(err){
        console.log(err);
        return res.status(404).json({
            success:false,
            message:"Some error occurred in candidate controller",
        })
    }
}

module.exports= voter;