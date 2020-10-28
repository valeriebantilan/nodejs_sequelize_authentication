const { validate } = require('express-validation');
import authCtrl from './auth.controller';
import paramValidation from './auth.validation';

module.exports = function(app) {
  app.route('/api/auth/login')
    .post(validate(paramValidation.login), authCtrl.login);
};
