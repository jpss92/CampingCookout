
import './Recipes.scss';
import Home from '../Home/Home';


function Recipes({ recipeData, images }) {

  return (
    <div className='recipe__container'>
      {recipeData.map((recipe) => (
        <div key={recipe.id} className='recipe'>
          <div className='recipe__title'>{recipe.title}</div>
          <img
            className='recipe__img'
            
            alt="recipe"
            />
          <ul>
          {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className='ingredients'>{ingredient}</li>
            ))}
          </ul>
          <div className='instructions'>{recipe.instructions.join(' ')}</div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
