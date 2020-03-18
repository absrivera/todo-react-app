const { Sequelize } = require('sequelize');

//DB connection configuration
//Sequelize parameters are as follows (dbName, userName, passWord, connectionObject)
const sequelize = new Sequelize('nodedb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' /*'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = sequelize;