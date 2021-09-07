import { Link } from 'react-router-dom';
import './Toolbar.css';
import myblacklogo from '../../resources/my-logo-black.png'

const toolbar = () => (
  <header className="navbar">
    <nav>
      <a href='/'>
        <img src={myblacklogo} alt='author logo' />
      </a>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><a href='/#about-section'>About</a></li>
          <li><a href='/#projects-section'>Projects</a></li>
          <li><a href='/#contact-section'>Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;