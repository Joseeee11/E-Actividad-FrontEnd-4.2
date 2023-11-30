import pencilIMG from "./media/iconos/pencil-solid.svg";
import React, { useState } from "react";
import TaskForm from "./Crear";
export function ButtonEditar({ posicion, tareas, setTareas }) {
  const [editando, setEditando] = useState(false);
  const [titulo, setTitulo] = useState(tareas[posicion].titulo);
  const [descripcion, setDescripcion] = useState(tareas[posicion].descripcion);
  const [importance, setImportance] = useState(tareas[posicion].importance);
  const [date, setDate] = useState(tareas[posicion].date);
//   console.log(titulo, descripcion, importance, date);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "titulo":
        setTitulo(value);
        break;
      case "descripcion":
        setDescripcion(value);
        break;
      case "importance":
        setImportance(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <button
        className="edit"
        onClick={() => {
          Editar(editando, setEditando);
        }}
      >
        <img src={pencilIMG} alt="Editar" />
      </button>
      <div className='flotanteEditar'   style={
    editando
      ? {
        backgroundColor: 'rgb(15,15,15,0.5)',
        visibility: "visible",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "opacity 0.3s linear",
      }
    : {
        display: "flex",
        position: "fixed",
        opacity: 0,
        visibility: "hidden",
        overflow: 'hidden',
        transition: "visibility 0s 0.3s, opacity 0.3s linear",
        width:0,
        height:0,
        
      }
  } >
        <div className="flotante">
          <form className="formulario divEdit">
            <label>
              Título:
              <input
                type="text"
                name="titulo"
                value={titulo}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Descripción:
              <textarea
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Importancia:
              <select
                name="importance"
                value={importance}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="IMPORTANTE">Importante</option>
                <option value="URGENTE">Urgente</option>
                <option value="NORMAL">Normal</option>
              </select>
            </label>
            <br />
            <label>
              Fecha:
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
              />
            </label>
            <br />
            <button className="buttonActualizar"
              onClick={(evento) =>
                Guardar(
                  setEditando,
                  evento,
                  posicion,
                  tareas,
                  setTareas,
                  titulo,
                  descripcion,
                  importance,
                  date
                )
              }
            >
              Guardar tarea
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function Guardar(
  setEditando,
  evento,
  posicion,
  tareas,
  setTareas,
  titulo,
  descripcion,
  importance,
  date
) {
  evento.preventDefault();
  let devolver = [...tareas];
  devolver[posicion].titulo = titulo;
  devolver[posicion].descripcion = descripcion;
  devolver[posicion].importance = importance;
  devolver[posicion].date = date;
  setTareas(devolver);
  setEditando(false);
}

function Editar(editando, setEditando) {
  if (editando == false) {
    setEditando(true);
  } else {
    setEditando(false);
  }
}
