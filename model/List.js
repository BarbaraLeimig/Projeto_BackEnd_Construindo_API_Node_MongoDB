const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let List = new Schema({
    task: {
        type: String,
        required: true
    }
},{
    collection: 'list'
});

module.exports = mongoose.model('list', List);