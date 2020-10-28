const Joi = require('joi');

module.exports = {
  // POST /api/auth/login
  login: {
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }
};
