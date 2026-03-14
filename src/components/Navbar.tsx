import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Navegación principal">
      <div className="navbar-brand">
        <Logo size={30} color="var(--color-accent)" />
        <span>R∴L∴ ALMIRANTE HOWARD N° 67</span>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Inicio
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}
