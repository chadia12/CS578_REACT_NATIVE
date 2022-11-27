const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/TtestDB";

const mongo = new MongoClient(uri);
let db;
const COLLECTION_NAME = "restaurants";

exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB is connected");
    db = client.db("TtestDB");
  } catch (err) {
    console.log("DB is not connected", err);
  }
};
// ADD NEW USER
exports.addUser = (user) => {
  const result = db.collection(COLLECTION_NAME).insertOne(user);
  return result;
};

// GET EMAIL
exports.getEmail = (email) => {
  const result = db.collection(COLLECTION_NAME).findOne({ email });
  return result;
};

// EDIT A USER
exports.editUser = (owner_id, user) => {
  const result = db
    .collection(COLLECTION_NAME)
    .updateOne(
      { _id: owner_id },
      {
        $set: {
          fullname: user.fullname,
          phone: user.phone,
          password: user.password,
          address: user.address,
        },
      }
    );
  return result;
};
// GET A USER
exports.getUser = (owner_id) => {
  const result = db.collection(COLLECTION_NAME).findOne({ _id: owner_id });
  return result;
};

// 'restaurants/owners/:owner_id/foods'
exports.addFood = (owner_id, food) => {
  const result = db
    .collection(COLLECTION_NAME)
    .updateOne({ _id: owner_id }, { $push: { foods: food } });
  return result;
};

//'restaurants/owners/:owner_id/foods'
exports.getAllFoods = (owner_id) => {
  const result = db
    .collection(COLLECTION_NAME)
    .findOne({ _id: owner_id }, { projection: { foods: 1, _id: 0 } });
  return result;
};

//restaurants/owners/:owner_id/foods/:food_id

exports.editFood = (owner_id, food_id, food) => {
  const { name, origin, price, image } = food;
  const result = db.collection(COLLECTION_NAME).updateOne(
    { _id: owner_id, "foods._id": food_id },
    {
      $set: {
        "foods.$.name": name,
        "foods.$.origin": origin,
        "foods.$.price": price,
        "foods.$.image": image,
      },
    }
  );
  return result;
};

//'/restaurants/owners/:own_id/foods/:food_id'
exports.deleteFood = (owner_id, food_id) => {
  const result = db
    .collection(COLLECTION_NAME)
    .updateOne({ _id: owner_id }, { $pull: { foods: { _id: food_id } } });
  return result;
};

// /restaurants/owners/:owner_id/notes
exports.addNote = (owner_id, note) => {
  const result = db
    .collection(COLLECTION_NAME)
    .updateOne({ _id: owner_id }, { $push: { notes: note } });
  return result;
};

// /restaurants/owners/:owner_id/notes
exports.getAllDailNote = (owner_id) => {
  const result = db
    .collection(COLLECTION_NAME)
    .findOne({ _id: owner_id }, { projection: { notes: 1, _id: 0 } });
  return result;
};
