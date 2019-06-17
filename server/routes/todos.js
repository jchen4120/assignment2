var express = require('express');
var router = express.Router();

var todos = [
  {id: 0, message: "watch Endgame"},
  {id: 1, message: "have a beach day"},
  {id: 2, message: "assignments :("}
]

var currId = 4;

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(todos));
});

router.post('/', function(req, res, next) {
  currId++;
  const newTodo = {id: currId, message: req.body.message};
  todos.push(newTodo);
  res.send(JSON.stringify(todos));
});

router.delete('/', function(req, res, next) {
  todos = [];
  res.send(JSON.stringify(todos));
});

router.post('/edit', function(req, res, next) {
  const newTodo = req.body;
  todos = todos.map(item => {
    if (item.id === newTodo.id) {
      return {id: item.id, message: newTodo.message}
    } else {
      return item
    }
  })
  res.send(JSON.stringify(todos));
})

module.exports = router;
