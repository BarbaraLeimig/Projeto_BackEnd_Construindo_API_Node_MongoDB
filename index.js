const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true })
        .then(
            () => {console.log('Database is connected')},
            err => {console.log(`Can not connect to the database. ${err}`)});

const userRoute = require('./routes/user.route');
const listRoute = require('./routes/list.route');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/list', listRoute);

app.get('/', function(req, res){
    res.send("<h1>App ToDo List</h1>");
});

const port = 3000;
http.createServer(app).listen(3000, () => console.log(`Server is running on port ${port}`));