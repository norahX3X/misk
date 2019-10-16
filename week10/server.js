// const express = require('express');
// console.log(express)


// const app = express();
// app.get('/', ( req, res )=>{
//      res.send('Hello World!')
//     })
// // 1st = raute , 2nd request , responce 
// app.get('/misk', ( req, res )=>{
// console.log("Oh hey! I got a request. Let me respond with something");
//  res.send('Hello misk!')
// })

// app.listen(3000, ()=> {
//  console.log("I am listening for requests!!!");
// });

const express = require('express');
console.log(express)
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];
// app.get('/world', (req, res) => {
//     res.send("hello world");
   
// });
// if we use : it will get any value regardless to what it is so we have to make sure that the values we want hard coded to be first 
// app.get('/:hello', (req, res) => {
//     res.send("hello");
// });
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/opps/:whateverwewant', (req, res) => {
    if (plants[req.params.whateverwewant]) {
          res.send(plants[req.params.whateverwewant]);
    } else {
      res.send('cannot find anything at this index: ' + req.params.whateverwewant);
    }

});
app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.prag+'  ' + req.query.title + ' ' + req.params.firstName);
  });

app.listen(port,() => {
    console.log('listening on port' , port);
});