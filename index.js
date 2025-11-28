require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const {User, Admin, Bivacco, Trail, Image, FavBivacco, FavTrail, Reservation, Setting, Notify } = require('./server/src/models/models');

const app = express();
app.use(express.json());

// Env var injected from Docker Compose
const mongoURI =  process.env.MONGO_URI 

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB Atlas via Mongoose');
        // console.log("Database:", mongoose.connection.name);
    })
    .catch(error => console.error('Error connecting to MongoDB Atlas: ', error));

app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}/`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
