const router = require('express').Router();
const userController = require('/controllers/userController');

router.route('/user').get(userController.getAllUsers).post(userController.createUser);
router.route('/user/:id').get(userController.getUser).put(userController.updateUser).delete(userController.deleteUser);