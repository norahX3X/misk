const mongoose = require('mongoose');
const Schema = mongoose.Schema

const fruitsSchema = new Schema({
  name: {type: String, required:true},
  color:{type: String, required:true},
  readyToEat:{type: Boolean, default:false}
})
const Fruit = mongoose.model('Fruit', fruitsSchema)
module.exports = Fruit;