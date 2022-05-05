const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Filme = require('../../models/Filmes')

const connection = new Sequelize(dbConfig);

Filme.init(connection)
module.exports = connection;