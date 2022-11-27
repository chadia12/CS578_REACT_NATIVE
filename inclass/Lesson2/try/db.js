const { MongoClient } = require("mongodb");
const { resolve } = require("path");
const url = "mongodb://localhost:27017/schoolDB";

const mongo = new MongoClient(url);
let db;

exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB is connected");
    db = client.db("schoolDB");
  } catch (err) {
    console.log("DB is not connected: ", err);
  }
};

exports.addBank = (bank) =>{
    return new Promise ((resl, rej) => {
        db.collection('banks').insertOne(bank)
        .then(result => resl(result))
        .catch(err => rej(err));
    }) 
}


exports.addUser = (bank_id, user) =>{
    return new Promise ((resl, rej) => {
        db.collection('banks').updateOne({_id: bank_id}, {$push :{"users": user}})
        .then(result => resl(result))
        .catch(err => rej(err));
    })

}



exports.insertOne = (obj, bank_id, user_id) => {
  const result = db
    .collection("banks")
    .updateOne(
      { _id: bank_id, "users._id": user_id },
      { $push: { "users.$.accounts": obj } }
    );
  return result;
};




exports.updateBalance = (obj, bank_id, user_id, account_id) => {
  const result = db
    .collection("banks")
    .updateOne(
      { "_id": bank_id, "users._id": user_id },
      { $set: { "users.$.accounts.$[ac].amount": obj.amount } },
      {  arrayFilters: [{ "ac._id": account_id }] }
    );
    return result;
};


exports.deleteUser = ( bank_id, user_id, account_id ) => {
    const result = db
    .collection("banks")
    .updateOne(
      { "_id": bank_id, "users._id": user_id },
      { $pull: { "users.$.accounts":{_id: account_id}}}
    );
    return result;
}