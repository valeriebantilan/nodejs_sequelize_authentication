const util = require('util');

// config should be imported before importing any other file
import {config} from '../config/config';
import {database} from '../config/database';
import app from '../config/express';

// starting database
try {
	const startingDatabase = async () => {
		await database.authenticate().catch(e => {
			return new Error(e);
		});
	}
	startingDatabase();

	console.info('connection to the database has been established successfully')
} catch (err) {
	console.info('unable to connect to the database:', err);
}
// DB.start();

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

module.exports = app;
