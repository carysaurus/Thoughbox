// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT =  3000;

const boxRouter = require('./routers/boxRouter');

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/notes-app')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err)
});


app.use(express.static('public'));

// Define Routes
app.use('/boxes', boxRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});