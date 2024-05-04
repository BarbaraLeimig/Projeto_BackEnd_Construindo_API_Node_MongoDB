const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../model/User');

// api to add user
userRoutes.route('/add').post((req, res) => {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'status': 'success','mssg': 'user added successfully'});
        })
        .catch(err => {
            res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
        });
});

// api to get users
userRoutes.route('/').get((req, res) => {
    User.find()
        .then(users => {
            res.status(200).json({ 'status': 'success', 'users': users });
        })
        .catch(err => {
            res.status(400).json({ 'status': 'failure', 'message': 'Something went wrong' });
        });
});

// api to get user by id
userRoutes.route('/user/:id').get((req, res) => {
    let id = req.params.id;
    User.findById(id)
        .then(user => {
            res.status(200).json({'status': 'success', 'user': user});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure', 'mssg': 'Something went wrong'});
        });
});

// api to update route
userRoutes.route('/update/:id').put((req, res) => {
    let id = req.params.id;
    User.findById(id)
        .then(user => {
            user.name = req.body.name;
            user.telephone = req.body.telephone;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save().then(business => {
                res.status(200).json({'status': 'success','mssg': 'Update complete'});
            })
        })
        .catch(err => {
            res.status(200).json({'status': 'success','mssg': 'Update complete'});
        });
});

// api for delete
userRoutes.route('/delete/:id').delete((req, res) => {
    User.findByIdAndRemove({_id: req.params.id})
        .then(user => {
            res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
        });
});
  
module.exports = userRoutes;