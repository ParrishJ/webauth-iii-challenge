const express = require('express')
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authorizationRouter = require('../authorization/auth-router.js');
const userRouter = require('../users/users-router.js');



server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', userRouter);
server.use('/api', authorizationRouter);

module.exports = server;

