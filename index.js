// import express from 'express';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [
    {"name": "John"},
    {"name": "David"},
    {"name": "kumar"},
]

let numbers = [5, 6, 7, 2, 4, 6]


// cors - cross origin resource sharing


// get 
// post - add new data
// put - update
// delete - delete 

app.get('/user', (request, response) => {
    response.json({
        data : users
    })
})

app.get('/numbers', (request, response) => {
    response.json({
        Numbers: numbers
    })
})


app.post('/add-user', (request, response) => {    
    const {name} = request.body
    users.push({"name": name})
    response.json({users})
})

app.put('/update-user', (request, response) => {

    let data = users.map((items) => {
        if (items.name === "John") {
            items.name = "senthil"
        }
        return items
    })
    users = data

    response.json({users})


})


app.delete('/remove-user', (request, response) => {
    const data = users.filter((data, index) => {
        if (index !== 1) {
            return data
        }
    })

    users = data

    response.json({users})


})


app.listen(5001, () => { console.log("listening on port 5001")})








