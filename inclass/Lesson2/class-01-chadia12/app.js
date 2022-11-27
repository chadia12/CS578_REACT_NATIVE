const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/test";

const mongo = new MongoClient(url);

// insert Data in Collection
const inserData = (db, obj) => {
    return new Promise((resolve, reject) => {
        db.collection('user').insertOne(obj)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
}
// find Data in collection
const search = (db, query) => {
    return new Promise ( (res , rej) => {
        db.collection('user').find({}).toArray()
        .then(result => res(result))
        .catch(err => rej (err))
    })
}


const connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB connected");
    const db = client.db("test");
    // const obj = {
    //     _id: 2,
    //     name: "chania"
    // }
    // const res = await inserData(db, obj);
    //    const obj1= { _id: 3, courses: [ "CS471", "CS571", "CS435" ] }
    // const obj2= { _id: 4, courses: [ "CS586", "CS571", "CS569" ] }
    //    await inserData(db, obj2)
    // const res = await search(db)

    // console.log(res);
    // const obj4 = { _id: 5, results: [ 1, 2, 5, 10 ] }
    // const obj5 ={ _id: 6, results: [ 5, 8, 9, 10 ] }
    // const obj6 = { _id: 7, results: [ 10, 11, 12 ] }
    // await inserData(db, obj5)
    // const res = await search(db, {results:{$in: [5, 10]}})
    const res = await search(db, {
      results: { $elemMath: { $gt: 5, $lt: 10 } },
    });
    console.log(res);
  } catch (err) {
    console.log("DB error: ", err);
  }
};

connectDB();


