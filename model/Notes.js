const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  discripton: {
    type: String,
    require: true,
    unique: true,
  },
  tag: {
    type: String,
  },
  date: {
    type: date,
    default: Date.now,
  },
});

module.exports = mongoose.module('user', notesSchema);