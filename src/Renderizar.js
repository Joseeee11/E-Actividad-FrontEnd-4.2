import imagenOso from "./media/_7decf490-d2ac-4192-85c2-0efcbe73cd8c.png";
import { ButtonDelete } from './Delete'


export function Renderizar({tareas, setTareas}) {
    if (tareas.length === 0 || !tareas) {
      return (
        <>
          <img src={imagenOso} alt="Oso con una lista" />
          <p>No hay tareas, agrega una</p>
        </>
      );
    } else {
      return <>
          {tareas.map((tarea, i) => (
            <div key={i} >
              <div>
                <button type="button"></button>
              </div>
              <div>
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
              </div>
              <div>
                <div>
                <h3>{tarea.date} date</h3>
                <h3>{tarea.importance} importancia</h3>
                </div>
                <div>
                  <ButtonDelete posicion={i} tareas={tareas} setTareas={setTareas} />
                  <button>edit</button>
                </div>
              </div>
            </div>
          ))}
        </>
    }
}

