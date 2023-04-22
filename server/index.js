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
app.use(
  cors({
    origin: "*",
  }),
);
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:3000/`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

app.use(allowCrossDomain);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT;

app.use("/", router);

try {
  db.authenticate().then(() =>
    db.sync().then(() => {
      app.listen(port, () => {
        console.log(`server running on ${port}`);
      });
      console.log("Connection has been established successfully.");
    }),
  );
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
