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

  const [Tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );
  
  useEffect(() => {
    function manejarCambioEnLocalStorage(evento) {
      if (evento.key === "tareas") {
        setTareas(JSON.parse(evento.newValue));
      }
    }
    window.addEventListener("storage", manejarCambioEnLocalStorage);

  }, []);

  useEffect(function () {
    Todos();
  }, [Tareas]);

  
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
