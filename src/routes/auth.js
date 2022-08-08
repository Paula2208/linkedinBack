const router = require('express').Router();
const {
    registerUser,
    logIn
} = require('../entities/auth')

router.route('/auth')
      .get(logIn);

router.route('/auth/user')
      .post(registerUser);

module.exports = router;