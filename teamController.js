const db = require('../db');
const Team = require('../models/Team');

const teamController = {
    getAllTeams: async (req, res) => {
        try {
            const teams = await Team.findAll();
            res.json(teams);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    createTeam: async (req, res) => {
        try {
            const { name, description } = req.body;
            const newTeam = await Team.create({ name, description });
            res.status(201).json(newTeam);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    getTeamById: async (req, res) => {
        try {
            const team = await Team.findByPk(req.params.id);
            if (!team) {
                return res.status(404).json({ message: 'Team not found' });
            }
            res.json(team);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    updateTeam: async (req, res) => {
        try {
            const { name, description } = req.body;
            const team = await Team.findByPk(req.params.id);
            if (!team) {
                return res.status(404).json({ message: 'Team not found' });
            }
            team.name = name;
            team.description = description;
            await team.save();
            res.json(team);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    deleteTeam: async (req, res) => {
        try {
            const team = await Team.findByPk(req.params.id);
            if (!team) {
                return res.status(404).json({ message: 'Team not found' });
            }
            await team.destroy();
            res.status(204).json({ message: 'Team deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = teamController;
