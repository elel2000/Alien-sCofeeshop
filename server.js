const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const userRouter = require('./routes/aliens.js');
const resRouter = require('./routes/reservations.js');
const drinksRouter = require('./routes/drinks.js');



// const alienRouter = require('./routes/aliens');
let aliens = require(`./data/profile.json`);




//Get alien by id

app.use('/aliens', userRouter);  //this is how we can use the router in a specific route

// app.get('/aliens/:name',)

app.use('/reservation', resRouter);


app.use('/drinks', drinksRouter);

// app.get('/aliens/:name',)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));

