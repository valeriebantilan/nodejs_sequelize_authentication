const Sequelize = require('sequelize');
import { config } from './config';

const database = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: 'mysql' || 'postgres',
  }
);


module.exports = {
  database,
}