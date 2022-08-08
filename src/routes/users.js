const router = require('express').Router();
const {
    getUser,
    getUsers
} = require('../entities/users')

router.route('/users')
      .get(getUsers);

router.route('/users/:userId')
      .get(getUser);

module.exports = router;