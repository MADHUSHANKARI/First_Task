const Task = require('../models/task')

 const CreateTask = async(req,res) =>{
    try {
        const { title, description, due_date, status } = req.body;
        const newTask = new Task({
            title,
            description,
            due_date,
            status
        });

        const savedTask = await newTask.save();

        res.status(201).json({savedTask,message:"Created Task Successfully*"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create task' });
    }

}

const ViewTasks=  async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
}

const  UpdateTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { title, description, due_date, status } = req.body;

       
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description, due_date, status },
            { new: true } 
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update task' });
    }
}



const DeleteTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;

        const deletedTask = await Task.findByIdAndRemove(taskId);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete task' });
    }
}


const FilterTask = async (req, res) => {
    try {
        const status = req.params.status;

        const allowedStatusValues = ['Pending', 'In Progress', 'Completed'];
        if (!allowedStatusValues.includes(status)) {
            return res.status(400).json({ error: 'Invalid status value' });
        }

        const tasks = await Task.find({ status });

        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve tasks by status' });
    }
}
module.exports= {CreateTask,ViewTasks,FilterTask,DeleteTask,UpdateTask}