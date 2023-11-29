import { ButtonDelete } from './Delete'

export function Prueba({tareas, setTareas}){
    console.log('estamos en prueba', tareas)
    return <>
        {tareas.length <= 0 ? <p>No hay Tareas <span>¡Crea Una!</span></p> : tareas.map((cadaTarea, i) => (
                <div key={i} >
                    <h1> {cadaTarea.titulo} <span> posicion {i} </span></h1>
                    <p> {cadaTarea.descripcion} </p>
                    <ButtonDelete posicion={i} tareas={tareas} setTareas={setTareas} />
                </div>
            ))
        }
    </>
}