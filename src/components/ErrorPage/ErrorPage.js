import { Link } from 'react-router-dom';
import './ErrorPage.css';
import errorImage from '../Hero/404-2.gif';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Error 404</h1>
        <h3>Page Not Found</h3>
        <Link to="/" className="go-back-button">
          Back to home page
        </Link>
      </div>
      <img src={errorImage} alt="404 Error" />
    </div>
  );
};

export default ErrorPage;
