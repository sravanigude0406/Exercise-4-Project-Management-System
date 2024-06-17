const db = require('../db');
const Task = require('../models/Task');

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    createTask: async (req, res) => {
        try {
            const { project_id, title, description, deadline, status } = req.body;
            const newTask = await Task.create({ project_id, title, description, deadline, status });
            res.status(201).json(newTask);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    getTaskById: async (req, res) => {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json(task);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    updateTask: async (req, res) => {
        try {
            const { title, description, deadline, status } = req.body;
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            task.title = title;
            task.description = description;
            task.deadline = deadline;
            task.status = status;
            await task.save();
            res.json(task);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    deleteTask: async (req, res) => {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            await task.destroy();
            res.status(204).json({ message: 'Task deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = taskController;
