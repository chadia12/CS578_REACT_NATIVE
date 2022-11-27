const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/testDB";

const mongo = new MongoClient(url);
let db;

 exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB is connected");
    db = client.db("testDB");
  } catch (err) {
    console.log("DB is not connected: ", err);
  }
};

exports.addTeacher = (teacher) =>{
    return new Promise( (resolve, reject) =>{
        db.collection("schools")
        .insertOne(teacher)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
};

exports.updateTeacher = (schoolId, teacher) =>{
    return new Promise( (resolve, reject) => {
        db.collection('schools').updateOne({_id:schoolId}, {$push: {teachers: teacher}})
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    })
}