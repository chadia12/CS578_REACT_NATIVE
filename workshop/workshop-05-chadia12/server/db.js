const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/departmentDB";

const mongo = new MongoClient(url);
let db;
let COLLECTION_NAME = "departments";

exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB is connected");
    db = client.db("departmentDB");
  } catch (err) {
    console.log("DB is not connected", err);
  }
};

exports.addDepartment = (department) => {
  const result = db.collection(COLLECTION_NAME).insertOne(department);
  return result;
};

exports.addCourse = (department_code, course) => {
  const result = db
    .collection("departments")
    .updateOne({ code: department_code }, { $push: { courses: course } });
  return result;
};

exports.getAllcourses = (department_code) => {
  const result = db
    .collection(COLLECTION_NAME)
    .findOne({ code: department_code });
  return result;
};

////PUT /departments/:department_code/courses/:course_code

exports.updateCourse = (department_code, course_code, name) => {
  const result = db
    .collection(COLLECTION_NAME)
    .updateOne(
      { code: department_code, "courses.code": course_code },
      { $set: { "courses.$.title": name } }
    );

  return result;
};

//DELETE /departments/:department_code/courses/:course_code
exports.deleteCourse = (department_code, course_code) => {
  const result = db
    .collection(COLLECTION_NAME)
    .updateOne(
      { code: department_code },
      { $pull: { courses: { code: course_code } } }
    );
  return result;
};
