require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }, 
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}


