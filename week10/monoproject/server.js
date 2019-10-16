require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const Blog = require('./models/blog')

mongoose.connect('mongodb://localhost/blog_mongo', {useNewUrlParser: true})
.then(() => console.log('mongodb running'),
(err) => console.log(err))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false})) //get json from body

app.get('/blogs', (req, res) => {
 console.log("ok")
   Blog.find()
   .then((posts)=>{

     res.send({posts: posts})
   })
   .catch((err) => console.log(err))

})


app.post('/blogs', (req, res)=>{

  let incomingData = {
   title : req.body.title,
   post : req.body.post
  }

  let post = new Blog(incomingData)
  post.save()
 //or
  // Post.create(incomingData)




})

app.listen(PORT, () => console.log(`app running on ${PORT}`))