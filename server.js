const express = require('express');
const app = express();
const db = require('./db');
const MenuItem = require('./model/MenuItem');
const passport = require('./auth');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body



const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();
};



app.use(logRequest);


app.use(passport.initialize());


const passwordMiddleWare = passport.authenticate('local', {session : false});
app.get('/', passwordMiddleWare, function(req, res) {
    res.send('Welcom to my hotel... How i can help you');
});

//Import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/person',passwordMiddleWare, personRoutes);

const menuRoutes = require('./routes/menuRoutes');
const Person = require('./model/Person');
const { message } = require('prompt');
app.use('/menu',passwordMiddleWare, menuRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});










    // const data = req.body //Assuming the request body contains the person data

    // //create a new person document  using the mongoose model
    // const newPerson = new Person(data);
    // // newPerson.name = data.name;
    // // newPerson.age = data.age;
    // // newPerson.mobile = data.mobile;
    // // newPerson.email = data.email;
    // // newPerson.address = data.address;

    // newPerson.save((error, savedPerson) => {
    //   if(error) {
    //     console.log('Error saving person:', error);
    //     res.status(500).json({error: 'Internal server error'})
    //   } else {
    //     console.log('data saved successfully');
    //     res.status(200).json(savedPerson)
    //   }    
    // })
    






































// app.get('/chicken', (req, res) =>{
//     res.send('Sure sir, I would love to server chicken');
// });


// app.listen(3000, () => {
//     console.log("server is running on the port 3000");
// });

// const express = require("express");
// const app = express();

// // Dynamic API using route parameters
// app.get("/order/:item", (req, res) => {
//     const item = req.params.item; // Get the dynamic part from the URL
//     res.send(`Sure! Your ${item} will be ready soon.`);
// });

// Start the server

// const express = require("express");
// const app = express();

// console.log("🚀 Server file loaded"); // To confirm it's the right file

// app.get("/", (req, res) => {
//   res.send("Welcome to my hotel");
// });

// app.get("/order/:item", (req, res) => {
//   const item = req.params.item;
//   res.send(`Sure! Your ${item} will be ready soon.`);
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
