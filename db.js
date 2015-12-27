var Sequelize = require('sequelize');

// get ENV variable from Heroku
var env = process.env.NODE_ENV || 'development';
var sequelize;

// if running on Heroku production env use Postgres
if(env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-todo-api.sqlite'
	});
}

var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.sequelize = sequelize; // sequelize instance
db.Sequelize = Sequelize; // Sequelize library

module.exports = db;