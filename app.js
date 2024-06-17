const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const teamRoutes = require('./routes/teams');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/teams', teamRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
