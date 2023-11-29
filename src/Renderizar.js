import imagenOso from "./media/OsoLista.png";
import { ButtonDelete } from './Delete'


export function RenderizarTodas({tareas, setTareas}) {
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
                <p>{tarea.date}</p>
                <button type="button"></button>
              </div>
              <div>
                <h2>{tarea.titulo}</h2>
                <p>Descripción: {tarea.descripcion}</p>
              </div>
              <div>
                <h3>{tarea.importance}</h3>
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

