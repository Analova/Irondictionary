const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const entrySchema = new Schema({
  originalWord:String,
  convertWord:String,
  _owner: {type:Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports =  Entry ;
