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

//import routes 
const TestRoutes = require('./routes/getTests')
const ScoresRoutes = require("./routes/ScoresRoutes")
const reviewsRoutes = require('./routes/reviewsRoutes')

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',
  };
  app.use(cors(corsOptions));
  

  //routing

  app.use("/", TestRoutes)
  app.use('/', ScoresRoutes)
  app.use('/', reviewsRoutes)

    app.listen(3001, async () => {

    console.log("Server started!")

})