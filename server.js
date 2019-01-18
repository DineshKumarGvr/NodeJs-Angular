const http = require('http');

const app = require('./app');

const homeRouter = require('./api/home/home');

const port = process.env.port || 4200;

const bodyParser = require('body-parser');

const express  = require('express');

const path = require('path');

app.use(express.static(path.join(__dirname, "dist/angular7")));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/home', homeRouter);

const server = http.createServer(app);

server.listen(port, (req, res, next) => {
    console.log("Running...")
});

