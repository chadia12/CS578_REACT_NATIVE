const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/schoolDB";

const mongo = new MongoClient(url);
let db;

const connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB is connected");
    db = client.db("schoolDB");
  } catch (err) {
    console.log("DB is not connected: ", err);
  }
};

connectDB();
exports.getAll = async (req, res) => {
  const result = await db.collection("school").find({}).toArray();
  res.json(result);
};

exports.addTeacher = async (req, res, next) => {
  const result = await db
    .collection("school")
    .updateOne({ _id: 1 }, { $push: { teachers: req.body } });
  res.json(result);
};

exports.updateTeacher = async (req, res) => {
  const result = await db
    .collection("school")
    .updateOne(
      { _id: 1, "teachers._id": Number(req.params.id) },
      { $set: { "teachers.$.name": req.body.name } }
    );
  res.json(result);
};

exports.deleteTeacher = async (req, res) => {
  const id = Number(req.params.id);
  const result = await db
    .collection("school")
    .update({ _id: 1 }, { $pull: { "teachers._id": id } });
  res.json(result);
};

exports.addStudent = async (req, res) => {
  const result = await db
    .collection("school")
    .updateOne(
      { "courses._id": 2 },
      { $push: { "courses.$.students": req.body.students } }
    );
  res.json(result);
};

exports.updateStudent = async (req, res) => {
  const cid = Number(req.params.courseId);
  const stid = Number(req.params.studentId);
  const result = await db.collection("school").updateOne(
    { "courses._id": cid },
    {
      $set: { "courses.$[obj].students": req.body },
    },
    {
      arrayFilters: [{ "obj._id": stid }],
    }
  );
  res.json(result);
};

exports.deleteStudent = async (req, res) => {
  const cid = Number(req.params.courseId);
  const stid = Number(req.params.studentId);
  const result = await db.collection("school").updateOne(
    { "courses._id": cid },
    {
      $unset: { "courses.$.students": { _id: stid } },
    }
  );
  res.json(result);
};
