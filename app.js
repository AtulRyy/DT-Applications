const express = require('express')
const app = express()
const mongoose = require('mongoose')
const csv=require('csv-parser')
const fs=require('fs')
const multer=require('multer')
const path=require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// MODELS
const applicant=require('./models/applicantModel')

// ROUTES
const allApplicantRoute=require('./routes/allApplicants')
const applicantRoute=require('./routes/applicantRoute')



app.use('/applicant',applicantRoute)
app.use('/',allApplicantRoute)

app.use(express.urlencoded({ extended: true }));

const mongooseString = 'mongodb+srv://atulreny911:M2pi8cnVTZliOp4s@interviewcluster.6whov.mongodb.net/?retryWrites=true&w=majority&appName=InterviewCluster'

mongoose.connect(mongooseString).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error:', err));


   


app.listen(3000, () => {
    console.log("Server listening at " + 3000);

})