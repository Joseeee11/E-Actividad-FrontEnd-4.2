import imagenOso from "./media/OsoLista.png";

export function PorHacer({tareas}) {

    const tareasPorHacer = tareas.filter(tarea => tarea.estado === false);
    console.log(tareasPorHacer);

    if (!tareasPorHacer || tareasPorHacer.length === 0) {
        return (
          <div className="no-tareas">
              <img className="osito" src={imagenOso} alt="Oso con una lista" />
              <p>No hay Tareas Completadas</p>
          </div>
        );
      } else {
        return <>
            {tareasPorHacer.map((tarea, i) => (
              <div key={i} className="tarea">
                <div className="fecha-check">
                  <p className={tarea.estado === true ? "tachado" : ""} >{tarea.date}</p>
                </div>
                <div className="titulo-descripcion">
                  <h2 className={tarea.estado === true ? "tachado" : ""} >{tarea.titulo}</h2>
                  <p>Detalles: {tarea.descripcion}</p>
                </div>
                <div className="importancia-botones">
                  <h3 className={tarea.importance === 'IMPORTANTE' ? 'importante' : tarea.importance === 'URGENTE' ? 'urgente' : 'normal'} >{tarea.importance}</h3>
                </div>
              </div>
            ))}
          </>
    }

}

export function Completadas({tareas}) {
    const tareasCompletadas = tareas.filter(tarea => tarea.estado === true);
    console.log(tareasCompletadas);

    if (!tareasCompletadas || tareasCompletadas.length === 0) {
        return (
          <div className="no-tareas">
              <img className="osito" src={imagenOso} alt="Oso con una lista" />
              <p>No hay Tareas Completadas</p>
          </div>
        );
      } else {
        return <>
            {tareasCompletadas.map((tarea, i) => (
              <div key={i} className="tarea">
                <div className="fecha-check">
                  <p className={tarea.estado === true ? "tachado" : ""} >{tarea.date}</p>
                </div>
                <div className="titulo-descripcion">
                  <h2 className={tarea.estado === true ? "tachado" : ""} >{tarea.titulo}</h2>
                  <p>Detalles: {tarea.descripcion}</p>
                </div>
                <div className="importancia-botones">
                  <h3 className={tarea.importance === 'IMPORTANTE' ? 'importante' : tarea.importance === 'URGENTE' ? 'urgente' : 'normal'} >{tarea.importance}</h3>
                </div>
              </div>
            ))}
          </>
    }
}