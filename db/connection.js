const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/authors', {useMongoClient: true})


var AuthorSchema = new mongoose.Schema ({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean
})


var Author = mongoose.model('Author', AuthorSchema)

module.exports = mongoose
