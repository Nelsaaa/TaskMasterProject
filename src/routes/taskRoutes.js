const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route pour créer une tâche
router.post('/', taskController.createTask);

// Route pour récupérer toutes les tâches
router.get('/', taskController.getTasks);

// Route pour modifier une tâche
router.put('/:id', taskController.updateTask);

// Route pour supprimer une tâche
router.delete('/:id', taskController.deleteTask);

module.exports = router;

