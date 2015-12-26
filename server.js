var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

// Body parser middleware
app.use(bodyParser.json());

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
	var matchedTodo = _.findWhere(todos, {id: todoId});

	// Iterate over todos array. Find the match
	// Below code is Refactored above with underscore in one line
/*	todos.forEach(function (todo) {
		if(todo.id === todoId) {
			matchedTodo = todo;
		}
	});*/

	if(matchedTodo) {
		res.json(matchedTodo);
	}
	else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function(req, res) {

	// refactored with underscore
	var todo = _.pick(req.body, 'description', 'completed');

	// validate a bad request
	if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
		res.status(400).send();
	}

	todo.description = todo.description.trim();

	// refactored with underscore pick above
	/*var todo = {
		 id : todoNextId
		, description: body.description
		, completed: body.completed
	};*/

	todos.push(todo);
	todoNextId++;

	res.status(200).send('Todo successfully added');
});


app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT);
});


/*	{
		id: 1
		, description: 'Meet a friend for lunch today'
		, completed: false
	},
	{
		id: 2
		, description: 'Go for shopping today'
		, completed: false
	},
	{
		id: 3
		, description: 'Call a friend today'
		, completed: true
	}*/