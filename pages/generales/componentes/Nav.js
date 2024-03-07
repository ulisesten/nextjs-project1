import Link from 'next/link';
import estilo from '../estilos/generales.module.css'

const Nav = () => {
  return (
    <nav className={estilo.nav}>
      <ul className={estilo.ul_nav}>
        <li className={estilo.li_nav}>
            <Link href="/" className={estilo.link_nav}>
                <img src="./assets/Aventura.png" className={estilo.img_nav} alt="Carrera Aventura" />
                <img src="./assets/CARRERAS.png" className={estilo.img_nav} alt="CARRERAS" />
                <span className="">Carrera Aventura</span>
            </Link>
        </li>
        <li className={estilo.li_nav}>
            <Link href="/carreras" className={estilo.link_nav}>
                Carreras
            </Link>
        </li>
        <li className={estilo.li_nav}>
            <Link href="/historico" className={estilo.link_nav}>
                Histórico
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;