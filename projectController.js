const db = require('../db'); // Database connection
const Project = require('../models/Project');

const projectController = {
    getAllProjects: async (req, res) => {
        try {
            const projects = await Project.findAll();
            res.json(projects);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    createProject: async (req, res) => {
        try {
            const { name, description } = req.body;
            const newProject = await Project.create({ name, description });
            res.status(201).json(newProject);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    getProjectById: async (req, res) => {
        try {
            const project = await Project.findByPk(req.params.id);
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.json(project);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    updateProject: async (req, res) => {
        try {
            const { name, description } = req.body;
            const project = await Project.findByPk(req.params.id);
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            project.name = name;
            project.description = description;
            await project.save();
            res.json(project);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    deleteProject: async (req, res) => {
        try {
            const project = await Project.findByPk(req.params.id);
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            await project.destroy();
            res.status(204).json({ message: 'Project deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = projectController;
