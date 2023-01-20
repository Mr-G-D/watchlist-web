const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT;
const api_key = process.env.API_KEY;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
