const express=require('express')
const router=express.Router()
const applicants=require('../models/applicantModel')

router.get("/:SRN",async(req,res)=>{
    try{
        const srn=req.params.SRN;
        const applicant=await applicants.findOne({SRN:srn});
        if(!applicant){
            return res.status(404).send("User not found")
        }
        res.render('applicant',{applicant:applicant})
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error'); // Handle server errors
    }
})


module.exports=router;