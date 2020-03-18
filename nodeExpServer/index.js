//Module import statements 
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const app = express();
const port = 4000;

//api imports 
const Todo = require('./models/todo')
const getTodos = require('./api/getTodos');
const addTodo = require('./api/addTodo');
const deleteTodo = require('./api/deleteTodo');
const getTodoById = require('./api/getTodoById')

//middleware config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//server route definitions
//routes trigger calls to the DB
app.get('/', (req, res) => {
    res.send('Success')
})

app.get('/get/todo', (req, res) =>{
    getTodoById(req, res, Todo)
})

app.get('/todos', (req, res) => {
    getTodos(req, res, Todo)
})

app.post('/add/todo', (req, res) =>{
    addTodo(req, res, Todo, (response) =>{
        res.send(response);
    })
})

app.delete('/todo', (req, res) =>{
    deleteTodo(req, res, Todo);
})


//{force: true} makes the DB data not persist
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log("Application running on " + port);
        });
    })

//closes stream once application/node is terminated
process.on('SIGTERM', () => {
    app.close(() => {
        db.end();
    });

    setTimeout(() => {
        console.log("Couldn't close connections in time, forcefully shutting down db connection")
        process.exit(1);
    }, 30 * 1000);

});

