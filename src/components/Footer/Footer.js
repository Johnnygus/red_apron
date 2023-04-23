import { Link } from 'react-router-dom';
import './Footer.css';
import siteLogo from '../Hero/siteLogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={siteLogo} alt="Red Apron Logo" />
      </div>
      <nav className="footer-nav">
        <ul>
          <li>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cuisines" onClick={scrollToTop}>
              Cuisines
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Red Apron. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
