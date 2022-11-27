const { MongoClient } = require("mongodb");
const { resolve } = require("path");
const url = "mongodb://localhost:27017/schoolDB";

const mongo = new MongoClient(url);
let db;

exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log("DB connected");
    db = client.db("schoolDB");
  } catch (err) {
    console.log("DB is not connected: ", err);
  }
};

exports.addBank = (bank) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .insertOne(bank)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

exports.addUser = (bankId, user) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .updateOne({ _id: bankId }, { $push: { users: user } })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
// /banks/:bank_id/users/:user_id
exports.addAccount = (bankId, userId, account) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .updateOne(
        { _id: bankId },
        { $push: { "users.$[u].accounts": account } },
        { arrayFilters: [{ "u._id": userId }] }
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

///banks/:bank_id/users/:user_id/accounts/:account_id
exports.updateAmount = (bankId, userId, accountId, amount) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .updateOne(
        { _id: bankId },
        { $set: { "users.$[u].accounts.$[a].amount": amount } },
        { arrayFilters: [{ "u._id": userId }, { "a._id": accountId }] }
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
// /banks/:bank_id/users/:user_id/accounts/:account_id
exports.deleteUser = (bankId, userId, accountId) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .updateOne(
        { _id: bankId },
        { $pull: { "users.$[u].accounts": { _id: accountId } } },
        {
          arrayFilters: [{ "u._id": userId }],
        }
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// /banks/:bank_id/users/:user_id/
exports.showAllAccounts = (bankId, userId) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .findOne(
        { _id: bankId, "users._id": userId },
        {
          projection: {
            _id: 0,
            "users.name": 0,
            "users._id": 0,
            "users.accounts._id": 0,
          },
        }
      )
      .toArray()
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

exports.totalBalance = (bankId, userId) => {
  return new Promise((resolve, reject) => {
    db.collection("banks")
      .aggregate([
        { $match: { _id: bankId } },
        {
          $group: {
            _id: userId,
            balance: { $sum: "users.$accounts.$.amount" },
          },
        },
      ])
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
