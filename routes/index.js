const express = require('express');
const router  = express.Router();
const Entry =require ("../models/Entry")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dictionary/add', (req, res, next) => {
  Entry.find()
  .then(dictionary=>{
    res.render('dictionary',{dictionary:dictionary});
  })
});


router.post('/dictionary/add', (req, res, next) => {
  let newEntry = {
    originalWord:req.body.originalWord,
    convertWord:req.body.convertWord,
  
  }
  Entry.create(newEntry)
  .then(newWord => {
    console.log("The word was saved!!!");
    res.redirect("/dictionary/add" );
  })
});

router.post("/dictionary/:id/delete", (req, res)=>{
  Entry.findByIdAndRemove(req.params.id)
   .then(newWord => {
     res.redirect("/dictionary/add");
  })
})

router.get('/converter', (req, res, next) => {
  res.render("converter")
  });





module.exports = router;
