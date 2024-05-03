const CandidateSchema = require("../models/candidate");
const ElectionSchema= require("../models/elections");

exports.candidate = async (req, res) => {
    try {
        console.log("Hello world");
        if(ElectionSchema.length==0){
            console.log("Hello world");
            await ElectionSchema.create({totalvote:0});
        }
        const { firstname, lastname, addharnumber, phonenumber } = req.body; // Corrected variable names

        const response = await CandidateSchema.create({ firstname, lastname, addharnumber, phonenumber });

        return res.status(200).json({
            success: true,
            data: response,
            message: "Entered Successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Some error occurred in candidate controller",
        });
    }
};

exports.getcandidate = async (req, res) => { // Corrected to use async-await
    try {
        const response = await CandidateSchema.find(); // Using await to wait for the result
        console.log(response);

        return res.status(200).json({
            success: true,
            data: response,
            message: "CandidateSchema has been found",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Error in candidateschema.find",
        });
    }
};
