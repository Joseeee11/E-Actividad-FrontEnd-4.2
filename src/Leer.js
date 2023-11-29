import { RenderizandoLeer } from "./RenderLeer";
import { useState, useEffect } from "react";


export function Leer() {
  // let task = [
  //   { title: "Tarea 1", description: "Descripción 1", importance: 'alta', date: "Fecha 1" },
  //   { title: "Tarea 2", description: "Descripción 2", importance: 'alta', date: "Fecha 2" }
  //   // ... continuar agregando tareas
  // ];

  // localStorage.setItem("tareas", JSON.stringify(task));
  // //
  let storage = [];
  const [Tareas, setTareas] = useState([]);

  const [Cambios, setCambios] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );
  
  useEffect(() => {
    function manejarCambioEnLocalStorage(evento) {
      if (evento.key === "tareas") {
        setCambios(JSON.parse(evento.newValue));
      }
    }
    window.addEventListener("storage", manejarCambioEnLocalStorage);
    return () => {
      window.removeEventListener("storage", manejarCambioEnLocalStorage);
    };
  }, []);

  useEffect(function (params) {
    Todos();
  }, [Cambios]);

  
  async function Todos() {
    // leyendo todos
    try {
      if (window.localStorage.getItem("tareas") != null) {
        storage = await JSON.parse(window.localStorage.getItem("tareas"));
        setTareas(storage);
      } else {
        setTareas([]);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <RenderizandoLeer resultado={Tareas} />
    </>
  );
}
