const express = require('express')
const path = require('path')
const router = express.Router();
const app = express()
const firebaseAdmin = require('firebase-admin')
const fs = require('fs')

var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//initialize firebase
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: 'https://webnote-5b973.firebaseio.com'
  });

//port to host server on
const port = process.env.PORT || 8000;

//regardless of request path, use index.html from the react.js build (DEPLOYMENT ONLY)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//(DEVELOPEMENT ROUTE)
/*
app.get('/', (req, res) => {
    console.log('I am Here')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
*/

app.use(express.static('public'));
// append /api for our http requests
app.use("/api", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))