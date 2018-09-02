const entry = require("../data/entry");
const Entry= require("../models/Entry");
const mongoose = require ("mongoose");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/irondictionary', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

    Entry.deleteMany(  )
  .then(x=>{console.log(x + " were deleted")
  })


  Entry.create(entry)
  .then(entry=>{
      console.log(entry.length +  "words were created" )
  })

  setTimeout(()=>{
    mongoose.disconnect()
  },2000)