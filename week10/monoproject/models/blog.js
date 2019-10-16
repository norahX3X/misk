const mongoose = require('mongoose')
const Schema= mongoose.Schema

const blogSchema= new Schema({
    title: {type: String, required: true},
    post: String,
    visible: {type: Number, default: 1}
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)
module.exports= Blog