const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
         .then((users) => {
             res.json(users);
         })
         .catch((err) => {
             res.status(500).json(err);
         });

    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
         .then((user) => {
             if (!user) {
                 res.status(404).json({ message: 'No user found with this id!' });
                 return;
             }
             res.json(user);
         })
         .catch((err) => {
             res.status(400).json(err);
         });
    },
    createUser({ body }, res) {
        User.create(body)
         .then((user) => {
             res.json(user);
         })
         .catch((err) => {
             res.status(400).json(err);
         });
    }};
    module.exports = userController;

// Path: routes/api/user-routes.js
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;

// Path: server.js

const express = require('express');
const mongoose = require('mongoose');


