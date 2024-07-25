
// routes/taskRoutes.js

// routes/taskRoutes.js

const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.put('/:id', auth, updateTask); // Ensure this line is present
router.delete('/:id', auth, deleteTask);

module.exports = router;




