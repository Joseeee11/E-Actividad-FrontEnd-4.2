import {useEffect, useState} from 'react';
import {RenderizarTodas} from './Renderizar'
import { PorHacer } from "./RenderizarCategoria";
import { Completadas } from "./RenderizarCategoria";
import TaskForm from './Crear'
import IconoCrear from './media/iconos/create.svg'
// import { Header } from './Header';


//Leer el LOCALSTORAGE

export function Read() {
    let [tareas, setTareas] = useState([]);  //tareas = estado actual ; setTareas = funcion para actualizar estado
    //guardar la lista de tareas del localstorage
    useEffect(() => {
        const listaTareas = JSON.parse(localStorage.getItem('tareas'));
        if (listaTareas) {
            setTareas(listaTareas); //la mandamos a que actualice la lista en el front
        } else {
            // console.log('no hay tareas')
            setTareas([]); //pa que no de error al estar vacio gente (tecnicamente no se si era por esto el error pero bueno porsia)
        }
    }, []);

    //actualizamos la lista en el localstorage
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    // console.log(typeof(tareas),tareas)

    const [activo, setActivo] = useState(1); //estado actual siempre el 1
    function pestañas(id){
        // console.log('cambio boton:', id);
        setActivo(id);
    }

    // console.log(activo)
    // console.log(tareas)

    return <> 
        <div className='pestanas'>
            <button onClick={() => pestañas(1) } className={activo === 1 ? 'button-activo' : 'button-desactivo'} > Creadas  {/*por ahora asi, luego se le añade la funcion para que cuente las tareas*/} </button>
            <button onClick={() => pestañas(2) } className={activo === 2 ? 'button-activo' : 'button-desactivo'} > Por Hacer  </button>
            <button onClick={() => pestañas(3) } className={activo === 3 ? 'button-activo' : 'button-desactivo'} > Realizadas  </button>
            <button onClick={() => pestañas(4) } className={activo === 4 ? 'button-activo' : 'button-desactivo'} > <img src={IconoCrear} alt='Crear Lista'/> </button>
        </div>
        <section className='contenedor-bloques'>
            <section className={activo === 1 ? 'bloque-activo' : 'bloque-desactivo'} ><RenderizarTodas tareas={tareas} setTareas={setTareas}/> </section>
            <section className={activo === 2 ? 'bloque-activo' : 'bloque-desactivo'} ><PorHacer tareas={tareas} setTareas={setTareas}/></section>
            <section className={activo === 3 ? 'bloque-activo' : 'bloque-desactivo'} ><Completadas tareas={tareas} setTareas={setTareas}/></section>
            <section className={activo === 4 ? 'bloque-activo' : 'bloque-desactivo'} ><TaskForm setTareas={setTareas}/></section>
        </section> 
    </> //pasamos la lista de tareas actuales y la funcion setTareas
}
