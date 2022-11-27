# MIU-MSD-CS571-2022-10-Homework02
## Rich MongoDB Documents Exercise
Please find below an Express application that connects to a local MongoDB instance, each document has the following structure for `schools` collection:
```JavaScript
{
    "_id":1,
    "teachers": [
        {"_id":1, "name":"Asaad"},
        {"_id":2, "name":"Umur"}
    ],
    "courses":[
        {"_id":1, "title": "CS477", "students":[
            {"_id":1, "name":"John"},
            {"_id":2, "name":"Selin"}
        ]},
        {"_id":2, "title": "CS571", "students":[
            {"_id":1, "name":"Alican"},
            {"_id":2, "name":"Dean"}
        ]},
        {"_id":3, "title": "CS415", "students":[
            {"_id":1, "name":"Tina"},
            {"_id":2, "name":"Clyde"}
        ]}
    ]
}
```
Your are responsible on writing code for 6 MongoDB queries within 6 pre-defined routes in `app.js` file:
1. Add teacher *(level 1)*
2. Update teacher by ID *(level 1)*
3. Delete teacher by ID *(level 1)*
4. Add a new student to specific course *(level 2)*
5. Update a student's name *(level 2)*
6. Delete a student *(level 2)*
