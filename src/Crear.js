import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    importance: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSaveTask = () => {
    // Obtener tareas existentes del localStorage
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Agregar la nueva tarea al array
    const updatedTasks = [...existingTasks, task];

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Limpiar el estado después de guardar
    setTask({
      title: '',
      description: '',
      importance: '',
      date: ''
    });
  };

  return (
    <div>
      <label>
        Título:
        <input type="text" name="title" value={task.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Descripción:
        <textarea name="description" value={task.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Importancia:
        <select name="importance" value={task.importance} onChange={handleChange}>
          <option value="">Seleccionar</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </label>
      <br />
      <label>
        Fecha:
        <input type="date" name="date" value={task.date} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSaveTask}>Guardar tarea</button>
    </div>
  );
};

export default TaskForm;
