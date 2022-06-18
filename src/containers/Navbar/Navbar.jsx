import './Navbar.scss';
import { navbarElements } from './categories';

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a>
            <img src="" alt="Kodak" />
          </a>
        </div>
        <div className="nav-items">
          {navbarElements.map((el) => (
              <a href={el.route}>{el.label}</a>
          ))}
        </div>
      </div>
    </>
  );
};
