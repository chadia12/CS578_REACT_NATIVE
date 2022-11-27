const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/TtestDB";

const mongo = new MongoClient(uri);
let db;

exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB is connected");
    db = client.db("TtestDB");
  } catch (err) {
    console.log("DB is not connected", err);
  }
};

exports.addUser = (user) => {
  const result = db.collection("users").insertOne(user);
  return result;
};

exports.getUsername = (username) => {
  const result = db.collection("users").findOne({ username });
  return result;
};
exports.getAllUsers = () => {
  const result = db.collection("users").find().toArray();
  return result;
};
