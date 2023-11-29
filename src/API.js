import {useEffect, useState} from 'react';
import { Prueba } from './Prueba';

//API con LOCALSTORAGE

export function API() {
    let [tareas, setTareas] = useState([]);  //tareas = estado actual ; setTareas = funcion para actualizar estado

    //descomentar cuando se acaben las tareas xd
    // tareas = [ {titulo:'Tarea 1', descripcion:'lolaaa'}, {titulo:'Tarea 2', descripcion:'ame un'}, {titulo:'Tarea 3', descripcion:'tikitiki'}]

    //guardar la lista de tareas del localstorage
    useEffect(() => {
        const listaTareas = JSON.parse(localStorage.getItem('tareas'));
        if (listaTareas) {
            setTareas(listaTareas); //la mandamos a que actualice la lista en el front
        } else {
            setTareas([]); //pa que no de error al estar vacio gente (tecnicamente no se si era por esto el error pero bueno porsia)
        }
    }, []);

    //actualizamos la lista en el localstorage
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    console.log(typeof(tareas),tareas)
    return <> <Prueba tareas={tareas} setTareas={setTareas}/> </> //pasamos la lista de tareas actuales y la funcion setTareas
}