import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Cuisine from '../Cuisine';
import RecipeDetails from '../Recipe';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage';
import './App.css'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisines" element={<Cuisine />} />
          <Route path="/cuisine/:cuisineName" element={<Cuisine />} />
          <Route path="/cuisine/:cuisineName/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
