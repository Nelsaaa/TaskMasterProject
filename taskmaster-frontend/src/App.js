import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3002/tasks';


  

  // --- READ : Récupérer toutes les tâches ---
  const fetchTasks = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error('Erreur de récupération des tâches:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // --- CREATE : Ajouter une nouvelle tâche ---
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTaskTitle,
          description: newTaskDescription,
        }),
      });
      if (res.ok) {
        const newTask = await res.json();
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
        setNewTaskDescription('');
      }
    } catch (err) {
      console.error('Erreur lors de la création de la tâche:', err);
    }
  };

  // --- DELETE : Supprimer une tâche ---
  const handleDeleteTask = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setTasks(tasks.filter((task) => task._id !== id));
      }
    } catch (err) {
      console.error('Erreur lors de la suppression de la tâche:', err);
    }
  };

  // --- Préparer la mise à jour (EDIT) d'une tâche ---
  const startEditing = (task) => {
    setEditingTask(task);
    setEditingTitle(task.title);
    setEditingDescription(task.description);
  };

  // --- UPDATE : Mettre à jour une tâche ---
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/${editingTask._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editingTitle,
          description: editingDescription,
        }),
      });
      if (res.ok) {
        const updatedTask = await res.json();
        setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
        setEditingTask(null);
      }
    } catch (err) {
      console.error('Erreur lors de la mise à jour de la tâche:', err);
    }
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>TaskMaster - Opérations CRUD</h1>

      {/* Formulaire pour ajouter une tâche */}
      <h2>Ajouter une tâche</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Titre"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          required
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit">Ajouter</button>
      </form>

      {/* Affichage de la liste des tâches */}
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ marginBottom: '1rem' }}>
            {editingTask && editingTask._id === task._id ? (
              // Si en mode édition, afficher un formulaire pour mettre à jour la tâche
              <form onSubmit={handleUpdateTask}>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  required
                  style={{ marginRight: '0.5rem' }}
                />
                <input
                  type="text"
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                  style={{ marginRight: '0.5rem' }}
                />
                <button type="submit">Sauvegarder</button>
                <button type="button" onClick={cancelEditing} style={{ marginLeft: '0.5rem' }}>
                  Annuler
                </button>
              </form>
            ) : (
              // Sinon, afficher les détails de la tâche
              <div>
                <strong>{task.title}</strong> – {task.description}
                <button onClick={() => startEditing(task)} style={{ marginLeft: '1rem' }}>
                  Éditer
                </button>
                <button onClick={() => handleDeleteTask(task._id)} style={{ marginLeft: '0.5rem' }}>
                  Supprimer
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
