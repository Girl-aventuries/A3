const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
app.use(errorMiddleware);

module.exports = app;