const express = require('express')
const app = express()
const mongoose = require('mongoose')
const csv=require('csv-parser')
const fs=require('fs')
const multer=require('multer')

const applicant=require('./models/applicantModel')

const csvFile='./testCSV.csv';

app.use(express.urlencoded({ extended: true }));

const mongooseString = 'mongodb+srv://atulreny911:M2pi8cnVTZliOp4s@interviewcluster.6whov.mongodb.net/?retryWrites=true&w=majority&appName=InterviewCluster'

mongoose.connect(mongooseString).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error:', err));


    const results = [];
    fs.createReadStream(csvFile)
      .pipe(csv({ separator: ';' , mapHeaders: ({ header }) => header.trim()}))  // Parse the CSV file
      .on('data', (data) => {
        
        
        
          // Push the parsed data to results
          results.push({
            firstName: data["name"],
            lastName:data["lastname"],
            email:data["email"],
            phone:data['phoneNumber'],
            semester:data['semester'],
            SRN:data['usn'],
            branch:data['branch'],
            aboutYourself:data['aboutYourself'],
            codingAdventures:data['codingAdventures'],
            github:data['github'],
            linkedin:data['linkedin'],
            resume:data['resume']

          });

          
      })
      .on('end', () => {
        console.log(results);
        
        
          // Insert parsed data into MongoDB
          applicant.insertMany(results)
            .then(() => {
                console.log('CSV data successfully uploaded to MongoDB');
                 // Close the connection after upload
            })
            .catch(err => {
                console.error('Error inserting data into MongoDB:', err);
            });
      });



app.listen(3000, () => {
    console.log("Server listening at " + 3000);

})