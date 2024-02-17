const express =require('express')
const Task = require('../models/task');
const router= express.Router();
const { CreateTask,ViewTasks ,FilterTask,DeleteTask,UpdateTask} = require('../controller/task');
// const bodyParser= require('body-parser')

//create a new taskr2t
router.post('/',CreateTask)
// view Tasks
router.get('/',ViewTasks);


//update task
router.put('/:taskId', UpdateTask);
//Delete task

router.delete('/:taskId', DeleteTask);

//filter task
router.get('/:status', FilterTask);

module.exports = router