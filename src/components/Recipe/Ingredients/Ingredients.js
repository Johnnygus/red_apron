import React from 'react';
import './Ingredients.css';

const Ingredients = ({ extendedIngredients }) => {
  return (
    <div className="ingredients-section">
      <h3>Ingredients:</h3>
      <div className="ingredients-grid">
        {extendedIngredients.map((ingredient, index) => (
          <div key={`${ingredient.id}-${index}`} className="ingredient-item">
            <img
              className="ingredient-image"
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
            />
            <span>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
