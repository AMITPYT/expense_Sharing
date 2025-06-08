const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const api = require("./routesAPI");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

require("./config/db")();

app.use("/v1/api", api);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));