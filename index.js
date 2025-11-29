const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const PORT = 3000;
const {User, Admin, Bivacco, Trail, Image, FavBivacco, FavTrail, Reservation, Setting, Notify } = require('./server/src/models/models');

const app = express();
app.use(express.json());

// Helper to read the secret
const getMongoURI = () => {
    const withAtlas = process.env.USE_ATLAS === "true";
    const secretPath = process.env.MONGO_URI_FILE;

    // Case 1: Docker with Secrets (Atlas)
    if (withAtlas && secretPath && fs.existsSync(secretPath)) {
        console.log("Loading Atlas URI from Docker Secret...");
        return fs.readFileSync(secretPath, 'utf8').trim();
    }

    // Case 2: Fallback (Use Local DB)
    console.log("No Secret found, use local URI by default...");
    return process.env.MONGO_URI_LOCAL; 
};

const connectDB = async () => {
    const uri = getMongoURI();
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB via Mongoose");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
};

connectDB();

app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}/`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
