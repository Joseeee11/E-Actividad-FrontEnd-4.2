import {useEffect, useState} from 'react';
import { Prueba } from './Prueba';
import {Leer} from './Leer'
import IconoCrear from './media/iconos/create.svg'
// import { Header } from './Header';


//API con LOCALSTORAGE

export function API() {
    let [tareas, setTareas] = useState(
        JSON.parse(localStorage.getItem("tareas")) || []
      );  //tareas = estado actual ; setTareas = funcion para actualizar estado

    //descomentar cuando se acaben las tareas xd
    // tareas = [ {titulo:'Tarea 1', descripcion:'lolaaa'}, {titulo:'Tarea 2', descripcion:'ame un'}, {titulo:'Tarea 3', descripcion:'tikitiki'}]

    //guardar la lista de tareas del localstorage
      
      useEffect(() => {
        function manejarCambioEnLocalStorage(evento) {
          if (evento.key === "tareas") {
            setTareas(JSON.parse(evento.newValue));
          }
        }
        window.addEventListener("storage", manejarCambioEnLocalStorage);
    
      }, []);
    

    //actualizamos la lista en el localstorage
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    console.log(typeof(tareas),tareas)

    const [activo, setActivo] = useState(1); //estado actual siempre el 1
    function pestañas(id){
        console.log('cambio boton:', id);
        setActivo(id);
    }

    console.log(activo)

    return <> 
        <div className='pestanas'>
            <button onClick={() => pestañas(1) } className={activo === 1 ? 'button-activo' : 'button-desactivo'} > Por Hacer <span>9</span> {/*por ahora asi, luego se le añade la funcion para que cuente las tareas*/} </button>
            <button onClick={() => pestañas(2) } className={activo === 2 ? 'button-activo' : 'button-desactivo'} > Realizadas <span>24</span> </button>
            <button onClick={() => pestañas(3) } className={activo === 3 ? 'button-activo' : 'button-desactivo'} > Atrasadas <span>3</span> </button>
            <button onClick={() => pestañas(4) } className={activo === 4 ? 'button-activo' : 'button-desactivo'} > <img src={IconoCrear} alt='Crear Lista'/> </button>
        </div>
        <section className='contenedor-bloques'>
            <section className={activo === 1 ? 'bloque-activo' : 'bloque-desactivo'} ><Prueba tareas={tareas} setTareas={setTareas}/> <Leer tareas={tareas} setTareas={setTareas}/> </section>
            <section className={activo === 2 ? 'bloque-activo' : 'bloque-desactivo'} >Realizadas</section>
            <section className={activo === 3 ? 'bloque-activo' : 'bloque-desactivo'} >Completas</section>
            <section className={activo === 4 ? 'bloque-activo' : 'bloque-desactivo'} >Crear</section>
        </section> 
    </> //pasamos la lista de tareas actuales y la funcion setTareas
}
