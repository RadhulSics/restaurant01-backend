const express = require("express");
const bodyParser = require("body-parser");
const router = require("./Routes");
const app = express();

const cors=require('cors')

const dbconnection = require("./dbconnection");
app.use(bodyParser.json());
app.use(cors())
app.use("/", router);
app.listen(3000);
  