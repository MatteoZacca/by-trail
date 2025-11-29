const express = require('express');

const router = express.Router();
const {User, Admin, Bivacco, Trail, Image, FavBivacco, FavTrail, Reservation, Setting, Notify } = require('../models/models');

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;