const express = require('express');
const mongoose = require('mongoose');

//transfer the contents of Express into a new constant called app.
const app = express();

//listen to changes of this file at port 3000
app.use(express.json());

app.listen(3000, () =>(
    console.log(`Server started at${3000}`)
));