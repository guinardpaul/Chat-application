const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

module.exports = (router) => {
  /**
  * Register User with auth
  */
  router.post('/register', (req, res, next) => {
    if (!req.body.nickname) {
      res.json({
        success: false,
        message: 'Nickname not provided'
      });
    } else if (!req.body.password) {
      res.json({
        success: false,
        message: 'Password not provided'
      });
    } else if (!req.body.email) {
      res.json({
        success: false,
        message: 'Email not provided'
      });
    } else {
      User.create(req.body, (err, data) => {
        if (err) {
          if (err.code === 11000) {
            res.json({
              success: false,
              message: 'Nickname ou Email existe déjà'
            });
          } else if (err.errors.email) {
            res.json({
              success: false,
              message: err.errors.email.message
            });
          }
          res.json({
            success: false,
            message: err
          });
        } else {
          res.json({
            success: true,
            obj: data
          });
        }
      });
    }
  });

  /**
   * Login user
   */
  router.post('/login', (req, res, next) => {
    if (!req.body.nickname) {
      res.json({
        success: false,
        message: 'Nickname not provided'
      });
    } else if (!req.body.password) {
      res.json({
        success: false,
        message: 'Password not provided'
      });
    } else {
      User.findOne({ nickname: req.body.nickname.toLowerCase() }, (err, user) => {
        if (err) {
          res.json({
            success: false,
            message: err
          });
        } else {
          if (!user) {
            res.json({
              success: false,
              message: 'User doesn\'t exists'
            });
          } else {
            const validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
              res.json({
                success: false,
                message: 'Invalid password'
              });
            } else {
              const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' });
              res.json({
                success: true,
                message: 'Logged in',
                token: token,
                obj: { nickname: user.nickname }
              });
            }
          }
        }
      });
    }
  });

  router.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      res.json({
        success: false,
        message: 'token not provided'
      });
    } else {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          res.json({
            success: false,
            message: 'token invalid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    }
  });

  router.get('/profile', (req, res, next) => {
    User.findById(req.decoded.userId).select('username email').exec((err, user) => {
      if (err) {
        res.json({
          success: false,
          message: err
        });
      } else if (!user) {
        res.json({
          success: false,
          message: 'User not find'
        });
      } else {
        res.json({
          success: true,
          obj: user
        });
      }
    })
  });

  return router;
}