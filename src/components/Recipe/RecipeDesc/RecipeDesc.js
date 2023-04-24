const RecipeDescription = ({ description }) => {
  return (
    <p className="recipe-description" dangerouslySetInnerHTML={{ __html: description }}></p>
  );
};

export default RecipeDescription;
