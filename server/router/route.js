const express= require("express");
const router= express.Router();

const {candidate, getcandidate}= require("../controller/candidate");
const voter= require("../controller/voter");
const {vote, getvote}= require("../controller/vote");

router.post("/candidate", candidate);
router.post("/voter", voter);
router.put("/vote/:id", vote);

router.get("/getcandidate", getcandidate);
router.get("/getvote", getvote);

module.exports= router;