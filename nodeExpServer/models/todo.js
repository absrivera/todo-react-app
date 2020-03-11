const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Todo extends Model{};

Todo.init({ 
 //   id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    deadline: DataTypes.STRING
}, {sequelize, modelName: 'todo'})

module.exports = Todo;