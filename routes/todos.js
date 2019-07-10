var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// this will be our data base's data structure
var todoSchema = new Schema(
  {
    message: String
  },
  { collection: 'todos' }
);

var Todo = mongoose.model("Todo", todoSchema);

router.get('/', function(req, res, next) {
  Todo.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(data));
    }
  });
});

router.post('/', function(req, res, next) {
  Todo.create({message: req.body.message}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      Todo.find((err, data) => {
        res.send(JSON.stringify(data));
      });
    }
  })
});

router.delete('/', function(req, res, next) {
  Todo.deleteOne({_id: req.body.id}, function(err) {
    if (err) {
      console.log(err);
    } else {
      Todo.find((err, data) => {
        res.send(JSON.stringify(data));
      });
    }
  })
});

router.put('/edit', function(req, res, next) {
  Todo.findByIdAndUpdate(req.body.id, {message: req.body.message}, function(err) {
    if (err) {
      console.log(err);
    } else {
      Todo.find((err, data) => {
        res.send(JSON.stringify(data));
      });
    }
  })
})

module.exports = router;
