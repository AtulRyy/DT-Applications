const express=require('express')
const router=express.Router()
const applicants=require('../models/applicantModel')

router.get('/',async(req,res)=>{
    try{
        const applicant=await applicants.find();
        res.render('allApplicants',{data:applicant})
    }
    catch(err){
        console.error(err);
        res.status(500).send("Server Error")
        
    }
    
})

module.exports=router