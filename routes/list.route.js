const express = require('express');
const app = express();
const listRoutes = express.Router();

let List = require('../model/List');

// api to add a task
listRoutes.route('/add').post((req, res) => {
    let list = new List(req.body);
    list.save()
        .then(list => {
            res.status(200).json({'status': 'success','mssg': 'list added successfully'});
        })
        .catch(err => {
            res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
        });
});

// api to get all tasks (list)
listRoutes.route('/').get((req, res) => {
    List.find()
        .then(lists => {
            res.status(200).json({ 'status': 'success', 'lists': lists });
        })
        .catch(err => {
            res.status(400).json({ 'status': 'failure', 'message': 'Something went wrong' });
        });
});

// api to get task by id
listRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    List.findById(id)
        .then(list => {
            res.status(200).json({'status': 'success', 'list': list});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure', 'mssg': 'Something went wrong'});
        });
});

// api to update a task by ID
listRoutes.route('/update/:id').put((req, res) => {
    let id = req.params.id;
    List.findById(id)
        .then(list => {
            list.task = req.body.task;

            list.save().then(business => {
                res.status(200).json({'status': 'success','mssg': 'Update complete'});
            })
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
        });
});

// api for delete a task
listRoutes.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    List.findOneAndDelete(id)
        .then(list => {
            res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
        });
});
  
module.exports = listRoutes;