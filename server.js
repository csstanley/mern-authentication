const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Setting up the Express app //
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware // 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection //
mongoose.connect('mongodb://localhost/test_auth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected!'));

// Start the API server //
app.listen(PORT, () => {
    console.log(`API server now listening on PORT ${PORT}!`)
});