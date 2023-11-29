import IconoCrear from './media/iconos/create.svg'
import BotonModoOscuro from './ModOscuro';
export function Header() {
    console.log('colocamos el header');
    return <>
        <header>
            <h1>To-Do List</h1>
            <div><BotonModoOscuro/></div>
        </header>
    </>
}
