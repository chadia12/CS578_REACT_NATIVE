# MIU-MSD-CS571-2022-10-Workshop01
## MongoDB Rich Documents Workshop
Please find below a schema structure for a bank application, each document has the following structure for `banks` collection:
```JavaScript
{
    "_id":1,
    "name: "BOA",
    "users":[
        {"_id":1, "name": "Michael", "accounts":[
            {"_id":1, "type": "debit", "number": 123, "routing": 123, "amount": 100},
        ]}
    ]
}
```
Assume that there are two types of account, debit and credit.
Create an Express application that connects to a MongoDB instance (local or cloud service), and write code for 6 MongoDB queries within 3 pre-defined routes in `app.js` file:
1. Add a new account to a specific user
2. Update an account's balance
3. Delete an account
4. (Optional) List all account information (bank's name, type, number, routing, amount) of a user
5. (Optional) Calculate a total money which a user have in the system

```JavaScript
// Add a new account to specific user
// The request body has {"_id":2, "type": "credit", "number": 456, "routing": 456, "amount": 50}
app.post('/banks/:bank_id/users/:user_id', async (req, res) => {
})

// Update a account's balance
// The request body has {"amount": 200}
app.patch('/banks/:bank_id/users/:user_id/accounts/:account_id', async (req, res) => {
})

// Delete a user
app.delete('/banks/:bank_id/users/:user_id/accounts/:account_id', async (req, res) => {
})
// List all accounts' information of a user: Return list of accounts like ["bank-name": 'BOA', "type": "debit", "number": 123, "routing": 123, "amount": 100}]
app.get('/banks/:bank_id/users/:user_id/', async (req, res) => {
})
// Get total money of a user: Return the balance of the user like {balance: 300}
app.get('/banks/:bank_id/users/:user_id/balance', async (req, res) => {
})
```
*Note: Queries should comply with REST design
