require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT
const mongoose = require('mongoose');
const Fruit = require('./models/fruit'); //NOTE: it must start with ./ if it's just a file, not an NPM package
app.set('view engine','ejs')
mongoose.connect('mongodb://localhost/fruits',{useNewUrlParser: true})
.then(()=> console.log('running'))

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
//include the method-override package
const methodOverride = require('method-override');
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
//index
app.get('/fruits/', (req, res) => {
  Fruit.find().then((fruits)=>{
    res.render('index', {fruits});
  }).catch(err => console.log(err))
});
//new form 
app.get('/fruits/new', (req, res) => {
    res.render('new');
});
app.post('/fruits', (req, res) => {
  let data = {
    name: req.body.name,
    color: req.body.color
  }
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
      data.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
      data.readyToEat = false
    }
    let fruit = new Fruit(data)
    fruit.save()
    .then(()=>{
    console.log('done')    
    res.redirect('/fruits')
    })
  })

//show
app.get('/fruits/:index', (req, res) => {
    // if (Number(req.params.index)){
      Fruit.findById(req.params.index).then((fruit)=>
    {
      res.render('show', {fruit});

    })
});
//edit 
app.get('/fruits/:index/edit', (req, res)=>{
  Fruit.findById(req.params.index).then((fruit)=>
  {
    res.render(
      'edit.ejs', //render views/edit.ejs
      { //pass in an object that contains
        fruit: fruit, //the fruit object
        index: fruit._id //... and its index in the array
      }
    )
  })
})

//update 
app.put('/fruits/:index', (req, res) => { // :index is the index of our fruits array that we want to change


  let data = {
    name: req.body.name,
    color: req.body.color
  }
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
      data.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
      data.readyToEat = false
    }

	fruits[req.params.index] = req.body //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)


    // let fruit =  Fruit.find((fruit)=>{

    // })

    fruit.save()
    .then(()=>{
    res.redirect('/fruits'); //redirect to the index page
  })
})
//delete 
app.delete('/fruits/:index', (req, res) => {
	fruits.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/fruits');  //redirect back to index route
});

//listener
app.listen(port, () => {
    console.log(`listening to ${port}`);
});