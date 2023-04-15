const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const crypto = require("crypto");

app.use(express.json());

const settings_database = require("./settings/database.json");
const connection = mysql.createConnection({
  host: settings_database.host,
  user: settings_database.user,
  password: settings_database.password,
  database: settings_database.database,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/favicon.ico", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Ce cauti aici? :)");
});

app.post("/api/check/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  let hash = crypto.createHash("sha256").update(password).digest("hex");
  connection.query(
    "SELECT * FROM users WHERE user = ?",
    [user],
    (err, rows) => {
      if (rows.length == 1 && rows[0].password == hash) {
        res.send("OK");
      } else {
        res.send("NOT OK");
      }
    }
  );
});

app.post("/api/check/register", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  let hash = crypto.createHash("sha256").update(password).digest("hex");

  connection.query(
    "SELECT * FROM users WHERE user = ?",
    [user],
    (err, rows) => {
      if (rows.length == 1) {
        res.send("NOT OK");
      } else {
        connection.query(`INSERT INTO users(user, password) VALUES (?, ?)`, [
          user,
          hash,
        ]);
        res.send("OK");
      }
    }
  );
});

app.post("/api/session/check", (req, res) => {
  const session = req.body.session;
  const password = session.split(" ");

  connection.query(
    "SELECT * FROM users WHERE session = ?",
    [session],
    (err, rows) => {
      if (rows.length == 1) {
        if (rows[0].session == session) {
          res.send("OK " + rows[0].user);
        }
      } else {
        res.send("NOT OK");
      }
    }
  );
});

app.post("/api/session", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const encodedPass = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  let hash = `session.${encodedPass}`;

  connection.query(
    `UPDATE users SET session = '${hash}' WHERE user = ? AND password = ?`,
    [user, encodedPass],
    (err, rows) => {
      res.send(`${hash}`);
    }
  );
});

app.listen(3001, () => {
  console.log("Running server on 3001..");
});
