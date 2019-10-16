const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')
//find all todos
router.get('/', (req, res)=> {

    Todo.find()
    .then((todos)=> {
     res.json({ todos : todos })
    })
    .catch(err => {
      res.json({ message : "Something went wrong!!!"})
    })
   
   })
   
   
   router.post('/', (req, res)=> {
   
    Todo.create(req.body)
    .then(() => {
      res.json({ message : "Todo Created Successfully!"})
    })
    .catch((err) => {
      res.json({ message : "Something went terribly wrong!"})
    })
    // res.status(200).json()
   })

router.get('/:id',(req,res)=>{
Todo.findById(req.params.id)
.then((todo)=>{
    res.json({todo} )
}).catch(err=>{
    res.json({ message : "Something went terribly wrong!"})
})
})
router.put('/:id',(req,res)=>{
    Todo.findByIdAndUpdate(req.params.id,req.body)
.then(()=>{
    res.json({message : "Updated!"} )
}).catch(err=>{
    res.json({ message : "Something went terribly wrong!"})
})

})
router.delete('/:id',(req,res)=>{

    Todo.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.json({message:"Deleteed!"})
    }).catch(err =>{
        res.json({ message : "Something went terribly wrong!"})
    })
})
module.exports = router