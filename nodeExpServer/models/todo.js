const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Todo extends Model{};

//sequelize todo DB model
Todo.init({ 
    description: DataTypes.STRING,
    deadline: DataTypes.STRING
}, {sequelize, modelName: 'todo'})

module.exports = Todo;