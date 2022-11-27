const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "CS-571-MSD";

const db = require("./db");
const { ObjectId } = require("mongodb");

db.connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/restaurants", async (req, res) => {
  try {
    const user = req.body;
    const existEmail = await db.getEmail(user.email);
    if (existEmail) {
      res.send({ success: 0, error: "This email exist" });
      return;
    }
    user.password = bcrypt.hashSync(user.password, 4);
    const result = await db.addUser(user);
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "User is not added" });
  }
});

// Edit user
app.put("/restaurants/owners/:owner_id", authorize, async (req, res) => {
  try {
    const ownerId = ObjectId(req.params.owner_id);
    const user = req.body;
    const result = await db.editUser(ownerId, user);
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "User is not updated" });
  }
});
// GET A USER
app.get("/restaurants/owners/:owner_id", authorize, async (req, res) => {
  try {
    const ownerId = ObjectId(req.params.owner_id);
    const result = await db.getUser(ownerId);
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "Fail to get user" });
  }
});

app.post("/restaurants/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await db.getEmail(email);
    if (result) {
      if (bcrypt.compare(password, result.password)) {
        const token = jwt.sign({ email }, PRIVATE_KEY, { expiresIn: 60*60 });
        res.send({ success: 1, data: {token, result} });
      } else {
        res.send({ success: 0, error: "Wrong password" });
      }
    } else {
      res.send({ success: 0, error: "Wrong Email" });
    }
  } catch (error) {
    res.send({ success: 0, error: "Fail to login" });
  }
});

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



//add food
app.put("/restaurants/owners/:owner_id/foods", authorize, async (req, res) => {
  try {
    const food = req.body;
    food._id = ObjectId();
    const ownerId = ObjectId(req.params.owner_id);
    food.date = new Date();
    const result = await db.addFood(ownerId, food);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

//Get All Food
app.get("/restaurants/owners/:owner_id/foods", authorize, async (req, res) => {
  try {
    const ownerId = ObjectId(req.params.owner_id);
    const result = await db.getAllFoods(ownerId);
    res.send({success:1, data:result});
  } catch (error) {
    res.send({success:0, error:"error get data"});
  }
});

//Edit food
app.put(
  "/restaurants/owners/:owner_id/foods/:food_id",
  authorize,
  async (req, res) => {
    try {
      const ownerId = ObjectId(req.params.owner_id);
      const foodId = ObjectId(req.params.food_id);
      const food = req.body;
      const result = await db.editFood(ownerId, foodId, food);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
);

// Delete food
app.delete(
  "/restaurants/owners/:owner_id/foods/:food_id",
  authorize,
  async (req, res) => {
    try {
      const ownerId = ObjectId(req.params.owner_id);
      const foodId = ObjectId(req.params.food_id);
      const result = await db.deleteFood(ownerId, foodId);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
);

// add Daily notes
app.post("/restaurants/owners/:owner_id/notes", authorize, async (req, res) => {
  try {
    const ownerId = ObjectId(req.params.owner_id);
    const note = req.body;
    note._id = ObjectId();
    note.date = new Date();
    const result = await db.addNote(ownerId, note);
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "fail to add note" });
  }
});
// Get All Daily notes
app.get("/restaurants/owners/:owner_id/notes", authorize, async (req, res) => {
  try {
    const ownerId = ObjectId(req.params.owner_id);
    const result = await db.getAllDailNote(ownerId);
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "fail to add note" });
  }
});

app.listen(3000, console.log("Listen on a port 3000"));
