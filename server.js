var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [
	{
		id: 1
		, description: 'Meet a friend for lunch'
		, completed: false
	},
	{
		id: 2
		, description: 'Go for shopping'
		, completed: false
	},
	{
		id: 3
		, description: 'Call a friend'
		, completed: true
	}
];

app.get('/', function(req, res) {
	res.send('Todo API root');
});

// GET /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {

	// convert the param to int from default string type
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	// Iterate over todos array. Find the match
	todos.forEach(function (todo) {
		if(todo.id === todoId) {
			matchedTodo = todo;
		}
	});

	if(matchedTodo) {
		res.json(matchedTodo);
	}
	else {
		res.status(404).send();
	}

});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT);
});