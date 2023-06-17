const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./config/database");
const path = require("path");

// connecting to database
connectDatabase();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

const port = process.env.PORT || 5000;

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// import routes
const Routes = require("./routes/Route");
app.use("/", Routes);

app.listen(port, () => console.log(`Node server started at port ${port}`));
