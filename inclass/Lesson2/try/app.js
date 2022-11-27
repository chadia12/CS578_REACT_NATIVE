const express = require('express');
const {ObjectId} = require('mongodb')
const app = express();
const db = require('./db');

app.use(express.json());

db.connectDB();

app.post('/banks', async (req, res) => {
    try{
const result = await db.addBank(req.body);
res.send(result)
    }catch(err){
res.send(err)
    }
})
//Add a Bnk
app.post('/banks', async (req, res) =>{
const result = db.addBank(req.body);
res.json(result);
})

// Add a new account to specific user
// The request body has {"_id":2, "type": "credit", "number": 456, "routing": 456, "amount": 50}
app.post('/banks/:bank_id/users/:user_id', async (req, res) => {
  
        // const result = await db.insertOne(req.body, Number(req.params.bank_id), Number(req.params.user_id));
        // res.json(result);
        try{
            const bankId = ObjectId(req.params.bank_id)
            const user = req.body;
            user._id = ObjectId()
            const result = await db.addUser(bankId, user);
            res.send(result)
                }catch(err){
            res.send(err)
                }

   
    
})

// Update a account's balance
// The request body has {"amount": 200}
app.patch('/banks/:bank_id/users/:user_id/accounts/:account_id', async (req, res) => {
    const result = await db.updateBalance(req.body, Number(req.params.bank_id), Number(req.params.user_id), Number(req.params.account_id));
    res.json(result);
})

// Delete a user
app.delete('/banks/:bank_id/users/:user_id/accounts/:account_id', async (req, res) => {
    const result = await db.deleteUser( Number(req.params.bank_id), Number(req.params.user_id), Number(req.params.account_id));
    res.json(result);
    
})
// List all accounts' information of a user: Return list of accounts like ["bank-name": 'BOA', "type": "debit", "number": 123, "routing": 123, "amount": 100}]
app.get('/banks/:bank_id/users/:user_id/', async (req, res) => {
})
// Get total money of a user: Return the balance of the user like {balance: 300}
app.get('/banks/:bank_id/users/:user_id/balance', async (req, res) => {
})


app.listen(3001, console.log("Listen on a port 3001"));