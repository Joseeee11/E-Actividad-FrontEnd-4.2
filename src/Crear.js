import React, { useState } from 'react';

const TaskForm = ({setTareas}) => {
  const [task, setTask] = useState({
    titulo: '',
    descripcion: '',
    importance: '',
    date: '',
    estado: 'false'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSaveTask = () => {
    console.log('estamos guardando')
    // Obtener tareas existentes del localStorage
    const existingTasks = JSON.parse(localStorage.getItem('tareas')) || [];
    
    // Agregar la nueva tarea al array
    const updatedTasks = [...existingTasks, task];

    // Guardar el array actualizado en el localStorage
    setTareas(updatedTasks)

    // Limpiar el estado después de guardar
    setTask({
      titulo: '',
      descripcion: '',
      importance: '',
      date: '',
      estado: 'false'
    });
  };

  return (
    <form>
      <label>
        Título:
        <input type="text" name="titulo" value={task.titulo} onChange={handleChange} />
      </label>
      <br />
      <label>
        Descripción:
        <textarea name="descripcion" value={task.descripcion} onChange={handleChange} />
      </label>
      <br />
      <label>
        Importancia:
        <select name="importance" value={task.importance} onChange={handleChange}>
          <option value="">Seleccionar</option>
          <option value="IMPORTANTE">Importante</option>
          <option value="URGENTE">Urgente</option>
          <option value="NORMAL">Normal</option>
        </select>
      </label>
      <br />
      <label>
        Fecha:
        <input type="date" name="date" value={task.date} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSaveTask}>Guardar tarea</button>
    </form>
  );
};

export default TaskForm;
