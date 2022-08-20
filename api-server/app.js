const express = require('express');
const { mongoose } = require('./lib/db');
const bodyParser = require('body-parser');
const cors = require('cors');

//routers
var itemRouter = require('./routes/items.route');
var categoryRouter = require('./routes/categories.route');

//Express App and Middleware Setup
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/items', itemRouter);
app.use('/categories', categoryRouter);

//Server Port Setup
const port = process.env.Port || 3000;
const server = app.listen(port, () => console.log(`Server listening on Port: ${port}... `));

