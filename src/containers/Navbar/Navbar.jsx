import './Navbar.scss';
import { navbarElements } from './categories';

export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='nav-left'>
          <a href='home' className='nav-logo'>
            <img src='' alt='Kodak' />
          </a>
        </div>
        <div className='nav-center'>
          {navbarElements.map((el) => (
            <a href={el.route} className='nav-item'>{el.label}</a>
          ))}
        </div>
        <div className='nav-right'>
          <a href='profile' className='nav-icon'>
            <img src='' alt='Profil' />
          </a>
          <a href='basket' className='nav-icon'>
            <img src='' alt='Panier' />
          </a>
        </div>
      </div>
    </>
  );
};
