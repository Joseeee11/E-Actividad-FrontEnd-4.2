import imagenOso from "./media/OsoLista.png";
import { ButtonDelete } from './Delete'
import { ButtonCheck } from './Check'

import IconoEditar from './media/iconos/pencil-solid.svg'

export function RenderizarTodas({tareas, setTareas}) {
    if (!tareas || tareas.length === 0) {
      return (
        <div className="no-tareas">
          <img className="osito" src={imagenOso} alt="Oso con una lista" />
          <p>No hay Tareas Completadas</p>
        </div>
      );
    } else {
      return <>
          {tareas.map((tarea, i) => (
            <div key={i} className="tarea">
              <div className="fecha-check">
                <p className={tarea.estado === true ? "tachado" : ""} >{tarea.date}</p>
                <ButtonCheck posicion={i} tareas={tareas} setTareas={setTareas} />
              </div>
              <div className="titulo-descripcion">
                <h2 className={tarea.estado === true ? "tachado" : ""} >{tarea.titulo}</h2>
                <p>Detalles: {tarea.descripcion}</p>
              </div>
              <div className="importancia-botones">
                <h3 className={tarea.importance === 'IMPORTANTE' ? 'importante' : tarea.importance === 'URGENTE' ? 'urgente' : 'normal'} >{tarea.importance}</h3>
                <div>
                  <ButtonDelete posicion={i} tareas={tareas} setTareas={setTareas} />
                  <button className='edit' onClick={() => console.log('editar')}> <img src={IconoEditar} alt='Editar Tarea'/> </button> {/*mientras tanto */}
                </div>
              </div>
            </div>
          ))}
        </>
    }
}

