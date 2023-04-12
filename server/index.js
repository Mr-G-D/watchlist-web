const express = require("express");
require("dotenv").config();
const db = require("./database");

// db.query("show tables").then(function (rows) {
//   console.log(JSON.stringify(rows));
// });

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

try {
  db.authenticate().then(() =>
    console.log("Connection has been established successfully."),
  );
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
