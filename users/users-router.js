const express = require('express');

const User = require('./users-model.js');
const restrict = require('../authorization/middleware.js');

const router = express.Router();

router.get('/', restrict, (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;

//test