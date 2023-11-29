import imagenOso from "./media/_7decf490-d2ac-4192-85c2-0efcbe73cd8c.png";

export function RenderizandoLeer(resultados) {
   
  let arrayResult = resultados.resultado;
  if (arrayResult.length == 0 || !arrayResult) {
    return (
      <>
        <img src={imagenOso} alt="Oso con una lista" />
        <p>No hay tares, agrega una</p>
      </>
    );
  } else {
    return (
      <>
        {arrayResult.map((tarea) => (
          <div>
            <div>
              <button type="button"></button>
            </div>
            <div>
              <h2>{tarea.title}</h2>
              <p>{tarea.description}</p>
            </div>
            <div>
              <div>
              <h3>{tarea.date}</h3>
              <h3>{tarea.importance}</h3>
              </div>
              <div>
                <button>delete</button>
                <button>edit</button>
              </div>
            </div>
          </div>
        ))}
        <p>hay resultado</p>
      </>
    );
  }
}