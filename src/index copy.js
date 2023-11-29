// //index para probar delete mientras

// //importamos React
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// //importamos CSS
// import './CSS/index.css';

// //importamos complementos
// import { Header } from './Header';
// import { API } from './API';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <Header/>
//     <div>
//       <API/>
//     </div>
//   </>
// );

//renderizado css
// import imagenOso from "./media/OsoLista.png";
// import { ButtonDelete } from './Delete'


// export function RenderizarTodas({tareas, setTareas}) {
//     if (tareas.length === 0 || !tareas) {
//       return (
//         <>
//           <img src={imagenOso} alt="Oso con una lista" />
//           <p>No hay tareas, agrega una</p>
//         </>
//       );
//     } else {
//       return <>
//           {tareas.map((tarea, i) => (
//             <div key={i} className="tarea">
//               <div className="fecha-check">
//                 <p>{tarea.date}</p>
//                 <button type="button"></button>
//               </div>
//               <div className="titulo-descripcion">
//                 <h2>{tarea.titulo}</h2>
//                 <p>Detalles: {tarea.descripcion}</p>
//               </div>
//               <div className="importancia-botones">
//                 <h3 className={tarea.importance = 'IMPORTANTE' ? 'importante' : tarea.importance = 'IMPORTANTE' ? 'urgente' : 'normal'} >{tarea.importance}</h3>
//                 <div>
//                   <ButtonDelete posicion={i} tareas={tareas} setTareas={setTareas} />
//                   <button>edit</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </>
//     }
// }
