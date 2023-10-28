require('dotenv').config();
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()
const cors = require("cors")

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, async () => {

    console.log("Server started!")

})