const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "CS-571-MSD";

const db = require("./db");

db.connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const existing = await db.getUsername(user.username);
    if (existing) {
      res.send({ success: 0, error: "username is existing" });
      return;
    }
    user.password = bcrypt.hashSync(user.password, 4);
    const result = await db.addUser(user);
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "Adding User error" });
  }
});
//login
app.post("/users/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await db.getUsername(username);
    if (result) {
      if (bcrypt.compare(password, result.password)) {
        const token = jwt.sign({ username }, PRIVATE_KEY, {
          expiresIn: 60 * 60,
        });
        res.send({ success: 1, data: token });
      } else {
        res.send({ success: 0, error: "Wrong password" });
      }
    } else {
      res.send({ success: 0, err: "Wrong username" });
    }
  } catch (error) {
    res.send({ success: 0, error: "Login Error" });
  }
});
//get all users
function authorize(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, PRIVATE_KEY, (error, data) => {
      if (error) {
        res.send({ success: 0, error: "Wrong token" });
        return;
      }
      next();
    });
  } else {
    res.send({ success: 0, error: "Require a token" });
  }
}

app.get("/users", authorize, async (req, res) => {
  try {
    const result = await db.getAllUsers();
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "Database error" });
  }
}); 

app.listen(3000, console.log("Listen on a port 3000"));
