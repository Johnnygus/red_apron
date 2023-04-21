import React from 'react';
import './ErrorPage.css';
import errorImage from '../Hero/404.gif'; 

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Page Not Found</h1>
      <img src={errorImage} alt="404 Error" />
    </div>
  );
};

export default ErrorPage;
