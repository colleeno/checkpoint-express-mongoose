const mongoose = require('./db/connection')
var express = require("express");

const Author = mongoose.model('Author')

var app  = express();

app.set("view engine", "hbs")

app.set("port", process.env.PORT || 4000);
app.listen(4000, () => {
  console.log("app listening on port 4000")
})

app.get("/", function(req, res){
  res.send("homepage");
});

app.get('/authors', function(req, res){
  var authors = Author.find({}).then((authors) => {
    res.render('authors-index', {
      authors: authors
    })
  })
  console.log("author index")
})

app.post('/authors', function(req, res){
  var data = req.body.author
  Author.create(data).then((candidate) => {
    res.redirect(`/authors/${author.name}`)
  })
  res.send("author post");
  console.log("author post")
})

app.get("/authors/:_id", function(req, res){
  var desiredAuthor = req.params._id;
  Author.findOne({name: desiredAuthor}).then((author) => {
    res.render("author-show", {
      author: author
    });
  })
  res.send("author show");
  console.log("author show")
})

app.post('/authors/:_id', function(req, res){
  Author.findOneAndUpdate({name: req.params._id}, req.body.candidate, {new: true}).then((author)=>{
    res.redirect("/authors/" + author._id)
  })
  res.send("author update");
  console.log("author update")
})

app.post('/authors/:_id/delete', function(req, res){
  Author.findOneAndRemove({name: req.params._id}).then((author)=>{
    res.redirect("/authors/")
  })
  res.send("author delete");
  console.log("author delete")
})

module.exports = express
