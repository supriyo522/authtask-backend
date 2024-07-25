// // controllers/taskController.js

// const Task = require('../models/Task');

// exports.getTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({ userId: req.user.id });
//         res.status(200).json(tasks);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.createTask = async (req, res) => {
//     const { title, description, dueDate, column } = req.body;

//     try {
//         const newTask = new Task({ title, description, dueDate, column, userId: req.user.id });
//         await newTask.save();
//         res.status(201).json(newTask);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.updateTask = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(updatedTask);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteTask = async (req, res) => {
//     const { id } = req.params;

//     try {
//         await Task.findByIdAndDelete(id);
//         res.status(200).json({ message: 'Task deleted' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// controllers/taskController.js

const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const newTask = new Task({ title, description, dueDate });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// controllers/taskController.js

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
