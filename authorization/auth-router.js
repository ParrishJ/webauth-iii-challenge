const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../users/user-model.js');
const secrets = require('../secrets.secrets.js')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    User.register(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    User.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    Message: `User ${user.username} logged in.`,
                    token,
                });
            } else {
                res.status(401).json({ message: 'You Shall Not Pass!' });
            }
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id
    };

    const options = {
        expiresIn: '4h'
    }

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;