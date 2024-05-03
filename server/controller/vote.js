const ElectionSchema = require("../models/elections");
const Candidate = require("../models/candidate");
const { response } = require("express");

exports.vote = async (req, res) => {
    try {
        // console.log(req);
        const id = req.params.id;
        console.log(id);

        const response = await ElectionSchema.updateMany({}, { $inc: { totalvote: 1 } });
        const response2 = await Candidate.findOneAndUpdate({ _id: id }, { $inc: { vote: 1 } });
        // console.log(response);
        // console.log(response2);


        if (response && response2) {
            return res.status(200).json({
                success: true,
                message: "Vote has been successfully counted",
            })
        }
        else if (!response) {
            return res.status(404).json({
                success: false,
                message: "Vote for totalschema doesn't count",
            })
        }
        else if (!response2) {
            return res.status(404).json({
                success: false,
                message: "Vote for voterschema doesn't count",
            })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: "Error in vote controller",
        })
    }
}

exports.getvote =async (req, res) => {
    try {
        const response = await ElectionSchema.find();
        return res.status(200).json({
            message:"Successful",
            data: response,
            success:true,
        })
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({
            success: false,
            message: "error in getvote",
        })
    }
}
