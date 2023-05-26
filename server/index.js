const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const crypto = require("crypto");
const messages = require("./ApplicationDatabase/messages.json");
const fs = require("fs");

app.use(express.json());

const settings_database = require("./settings/database.json");
const connection = mysql.createPool({
  host: settings_database.host,
  user: settings_database.user,
  password: settings_database.password,
  database: settings_database.database,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/favicon.ico", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Ce cauti aici? :)");
});

app.get("/api/checkMessages", (req, res) => {
  let messagesArray = [];
  for (let i = 1; i <= Object.keys(messages).length; i++) {
    messagesArray.push(messages[i]);
  }
  res.send(messagesArray);
});

app.post("/api/post/message", (req, res) => {
  const user = req.body.user;
  const message = req.body.message;
  const date = new Date();
  let newJSON = messages;
  let JSONAppend = Object.keys(messages).length + 1;
  newJSON[JSONAppend] = { user: user, message: message, date: date };
  if (
    messages[JSONAppend - 1] &&
    newJSON[JSONAppend] != messages[JSONAppend - 1]
  ) {
    fs.writeFileSync(
      __dirname + "/ApplicationDatabase/messages.json",
      "\n" + JSON.stringify(newJSON, null, 2),
      (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log("SUCCESS");
          res.sendStatus(200);
        }
      }
    );
    res.send("OK");
  }
});

app.post("/api/check/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  let hash = crypto.createHash("sha256").update(password).digest("hex");
  connection.query(
    "SELECT * FROM users WHERE user = ?",
    [user],
    (err, rows) => {
      if (rows && rows.length == 1 && rows[0].password == hash) {
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
      if (rows && rows.length == 1) {
        res.send("NOT OK");
      } else {
        connection.query(
          `INSERT INTO users(user, password) VALUES (?, ?)`,
          [user, hash],
          (err, rows) => {
            if (err) {
              console.log(err);
            }
          }
        );
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
      if (rows && rows.length == 1) {
        if (rows[0].session == session) {
          res.send(rows[0].user);
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
  let hash = `session.${encodedPass}.${user}`;

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
