// External Dependancies
const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
  tags: String
})

module.exports = mongoose.model('Bookmark', bookmarkSchema)