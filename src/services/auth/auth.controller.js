// async await handlers is express.js
require('express-async-errors');

import jwt from 'jsonwebtoken';
import { User } from '../../utils/models';

async function login(req, res, next){
  try {
    const { email, password } = req.body

    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      }
    });
    
    if(user){

      const jwtToken = jwt.sign({
        id: user.id,
        iat: Date.now(),
      }, process.env.JWT_SECRET, {
          expiresIn: '1D',
      })

      return res.status(200).json({
        token: jwtToken,
        status: true,
        expiresIn: '1D',
        user: user,
      });
    } else{
      //
      return res.status(401).json({
        status: false,
        message: "Entered wrong credentials",
      })
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { 
  login, 
};
