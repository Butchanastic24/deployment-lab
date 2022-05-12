//Initial server config stuff
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const {SERVER_PORT} = process.env

// End Points and Logic
app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));