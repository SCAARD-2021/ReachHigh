'use-strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./backend/routes');

const port=process.env.PORT||1005

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())

app.use('/scaard/',routes)

app.listen(port, () => console.log(`Server listening on port ${port}`))