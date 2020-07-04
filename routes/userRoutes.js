const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .route('/login')
    .post(authController.login)

router
     .route("/logout")
     .get(authController.logout)
router
  .route('/')
  .get(authController.protect ,userController.getAllUsers)
  .post(authController.signup);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
