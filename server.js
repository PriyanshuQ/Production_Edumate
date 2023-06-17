const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');
const connectDatabase = require("./config/database");

// connecting to database
connectDatabase();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// import routes
const Routes = require("./routes/Route")
app.use('/', Routes);


app.listen(port, () => console.log(`Node server started at port ${port}`))
