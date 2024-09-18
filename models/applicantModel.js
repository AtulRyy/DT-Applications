const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    semester: {
        type: Number
    },
    SRN: {
        type: String
    },
    branch:{
        type:String
    },
    aboutYourself:String,
    codingAdventures:String,
    github:String,
    linkedin:String,
    resume:String

})
module.exports=mongoose.model('applicant',applicantSchema)