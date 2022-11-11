import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <NavLink to={'/'} className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/movies'} className="nav-link">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
