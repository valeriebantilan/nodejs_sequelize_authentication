import UserController from './user.controller'
const { validate } = require('express-validation')
const paramValidation = require('./user.validation');
import passport from 'passport';

module.exports = function(app) {
  app.route('/api/user/:userId')
    .get(passport.authenticate('jwt', { session: false }),
      UserController.getUserById);

  app.route('/api/users')
    .get(passport.authenticate('jwt', { session: false }),
      UserController.getUsers);

  app.route('/api/user')
    .post(validate(paramValidation.create),
      UserController.createUser);

  app.route('/api/user/update/:userId')
    .post(validate(paramValidation.update),
      passport.authenticate('jwt', { session: false }),
      UserController.updateUser);
      
  app.route('/api/user/delete/:userId')
    .post(passport.authenticate('jwt', { session: false }),
      UserController.deleteUser);
};

