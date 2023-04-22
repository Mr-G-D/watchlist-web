const express = require("express");
require("dotenv").config();
const db = require("./database");
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const List = require("./Models/List");

// db.query("show tables").then(function (rows) {
//   console.log(JSON.stringify(rows));
// });

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT;

app.use("/", router);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

try {
  db.authenticate().then(() =>
    db
      .sync()
      .then(() => console.log("Connection has been established successfully.")),
  );
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
