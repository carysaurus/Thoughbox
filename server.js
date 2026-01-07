// server.js

const express = require('express');
const mongoose = require('mongoose');

const boxRouter = require('./routers/boxRouter');
const noteRouter = require('./routers/noteRouter');
const configRouter = require('./routers/configRouter');

const app = express();
const PORT = 3000;



app.use(express.json());

// --------------------------------------
// Connect to MongoDB
// --------------------------------------
mongoose.connect('mongodb://localhost:27017/notes-app')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err)
    });


app.use(express.static('public'));

// --------------------------------------
// Define Routes
// --------------------------------------
app.use('/boxes', boxRouter);
app.use('/notes', noteRouter);
app.use('/config', configRouter);


// --------------------------------------
// Run Server
// --------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});