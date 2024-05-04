var express = require('express'),
    path = require('path'),
    bodyParser = requisre('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todolist', { userNewUrlParser: true })
    .then(
        () => {console.log('Database is connected')},
        err => {console.log(`Can not connect to the database. ${err}`)});

const userRoute = require('./routes/user.route');
const listRoute = require('./routes/list.route');
const { log } = require('console');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/list', listRoute);
app.get('/', (req, res) => {
    res.send("App ToDo List");
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});