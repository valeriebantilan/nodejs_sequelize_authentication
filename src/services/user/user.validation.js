const { Joi } = require('express-validation')

module.exports = {
  // POST /api/customer
  create: {
    body:  Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
  update: { 
    body: Joi.object({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
    }),
  },
};
