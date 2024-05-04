const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String,
    required: true // sinaliza que é um item obrigatório
  },
  telephone: {
    type: Number,
    unique: true // sinaliza que é um item único
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);