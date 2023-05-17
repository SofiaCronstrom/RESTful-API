//import the contents of our .env file in the script file, index.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');


//connect the database to our server using Mongoose
mongoose.connect(mongoString);

const database = mongoose.connection;

//success or error message for database
database.on('error', (error) =>{
    console.log(error)
});

database.once('connected', () =>{
   console.log("database connected")
})

//transfer the contents of Express into a new constant called app.
const app = express();

//listen to changes of this file at port 3000
app.use(express.json());

app.listen(3000, () =>(
    console.log(`Server started at${3000}`)
));


app.use('/api', routes)
