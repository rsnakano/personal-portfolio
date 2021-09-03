import './Toolbar.css';
import { Link } from 'react-router-dom';

const toolbar = () => (
  <header className="navbar">
    <nav>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;