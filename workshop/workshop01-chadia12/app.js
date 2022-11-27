const { ObjectId } = require("mongodb");
const express = require("express");
const db = require("./db");
db.connectDB();
const app = express();

app.use(express.json());

// ADD BANK
app.post("/banks", async (req, res) => {
  try {
    const result = await db.addBank(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
// ADD A USER
app.post("/banks/:bank_id/users", async (req, res) => {
  try {
    const bankId = ObjectId(req.params.bank_id);
    const user = req.body;
    user._id = ObjectId();
    const result = await db.addUser(bankId, user);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Add a new account to specific user
// The request body has {"_id":2, "type": "credit", "number": 456, "routing": 456, "amount": 50}
app.post("/banks/:bank_id/users/:user_id/accounts", async (req, res) => {
  try {
    const bankId = ObjectId(req.params.bank_id);
    const userId = ObjectId(req.params.user_id);
    const account = req.body;
    account._id = ObjectId();
    const result = await db.addAccount(bankId, userId, account);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Update a account's balance
// The request body has {"amount": 200}
app.patch(
  "/banks/:bank_id/users/:user_id/accounts/:account_id",
  async (req, res) => {
    try {
      const bankId = ObjectId(req.params.bank_id);
      const userId = ObjectId(req.params.user_id);
      const accountId = ObjectId(req.params.account_id);
      const amount = req.body.amount;
      const result = await db.updateAmount(bankId, userId, accountId, amount);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
);

// Delete a user
app.delete(
  "/banks/:bank_id/users/:user_id/accounts/:account_id",
  async (req, res) => {
    try {
      const bankId = ObjectId(req.params.bank_id);
      const userId = ObjectId(req.params.user_id);
      const accountId = ObjectId(req.params.account_id);
      const result = await db.deleteUser(bankId, userId, accountId);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
);
// List all accounts' information of a user: Return list of accounts like ["bank-name": 'BOA', "type": "debit", "number": 123, "routing": 123, "amount": 100}]
app.get("/banks/:bank_id/users/:user_id/", async (req, res) => {
  try {
    const bankId = ObjectId(req.params.bank_id);
    const userId = ObjectId(req.params.user_id);
    const result = await db.showAllAccounts(bankId, userId);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
// Get total money of a user: Return the balance of the user like {balance: 300}
app.get("/banks/:bank_id/users/:user_id/balance", async (req, res) => {
  try {
    const bankId = ObjectId(req.params.bank_id);
    const userId = ObjectId(req.params.user_id);
    const result = await db.totalBalance(bankId, userId);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.listen(3002, console.log("Listen on port 3002"));
