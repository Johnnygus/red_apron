import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instruction/Instructions';
import NutritionLabel from './NutritionLabel/NutritionLabel';
import WinePairing from './WinePairing/WinePairing'
import RelatedRecipes from './RelatedRecipes/RelatedRecipes';
import RecipeDescription from './RecipeDesc/RecipeDesc';
import './RecipeDesc/RecipeDesc.css';
import Navbar from '../Navbar/Navbar';
import foodBanner from '../Media/food_banner5.jpg';
import siteLogo from '../Media/siteLogo.png';

const SPOON_API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const [nutritionLabel, setNutritionLabel] = useState(null);
  const [winePairing, setWinePairing] = useState(null);
  const { cuisineName } = useParams();
  const diet = recipeDetails?.diets.join(', ');

  //Recipe Details
  useEffect(() => {
    const fetchRecipeDetails = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOON_API_KEY}&includeNutrition=true`
        );
        const data = await response.json();
        setRecipeDetails(data);
      };
  
    fetchRecipeDetails();
  }, [recipeId]);
  
  //Wine Pairing
  useEffect(() => {
    const fetchWinePairing = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/food/wine/pairing?apiKey=${SPOON_API_KEY}&food=${cuisineName}`
        );
        const data = await response.json();
        console.log(data);
        setWinePairing(data);
      };

    if (recipeDetails) {
      fetchWinePairing();
    }
  }, [recipeDetails, cuisineName]);

  
  //Related Recipes
  useEffect(() => {
    const fetchRelatedRecipes = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${SPOON_API_KEY}&number=6`
        );
        const data = await response.json();
        setRelatedRecipes(data);
    };
  
    fetchRelatedRecipes();
  }, [recipeId]);

  //Nutrition Label
  useEffect(() => {
    const fetchNutritionLabel = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.png?apiKey=${SPOON_API_KEY}`
        );
        const imageURL = response.url;
        setNutritionLabel(imageURL);
    };

    fetchNutritionLabel();
  }, [recipeId]);
  
  return (
    <div>
    <Navbar />
      <div className="hero" style={{ backgroundImage: `url(${foodBanner})` }}>
        <img className="site-logo" src={siteLogo} alt="Site Logo" />
        <h1 className='webtitle'> Your belly knows best </h1>
      </div>
      <div className='content'> 
        <div className="recipe-details">
          {recipeDetails ? (
          <>
            <h2 className="recipe-title">{recipeDetails.title}</h2>
            <div className="recipe-image-container">
              <img
                className="recipe-image"
                src={recipeDetails.image}
                alt={recipeDetails.title}
              />
              <div className="recipe-diet">
                {diet && (
                  <>
                    <span className="diet-icon">
                      <i className="fas fa-seedling"></i>
                    </span>
                    <span className="diet-label">{diet}</span>
                  </>
                )}
            </div>
          </div>

         
            <div className="recipe-info">
              <RecipeDescription description={recipeDetails.summary} />
              
              <WinePairing winePairing={winePairing} /> 
            
              <Ingredients extendedIngredients={recipeDetails.extendedIngredients} />
              
              <NutritionLabel nutritionLabel={nutritionLabel} />
              
              <Instructions analyzedInstructions={recipeDetails.analyzedInstructions} />

          </div>
          <div className="navigation-buttons">
            <button className="back-button" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <Link to="/" className="home-button">
              Home
            </Link>
          </div>
          <RelatedRecipes relatedRecipes={relatedRecipes} />
        </>
      ) : (
        <p>Loading recipe details...</p>
      )}
        </div>
      </div>
    </div> 
  );
};

export default RecipeDetails;