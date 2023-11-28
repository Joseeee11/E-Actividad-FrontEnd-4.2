import IconoCrear from './media/iconos/create.svg'

export function Header() {
    console.log('colocamos el header');
    return <>
        <header>
            <h1>To-Do List</h1>
            <div className='pestanas'>
                <button> Por Hacer <span>9</span> {/*por ahora asi, luego se le añade la funcion para que cuente las tareas*/} </button>
                <button> Realizadas <span>24</span> </button>
                <button> Atrasadas <span>3</span> </button>
                <button> <img src={IconoCrear} alt='Crear Lista'/> </button>
            </div>
        </header>
    </>
}