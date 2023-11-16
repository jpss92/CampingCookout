import { useParams } from 'react-router-dom';
import './Recipes.scss';
import Home from '../Home/Home';


function Recipes({ recipeData }) {

    const { id } = useParams();
    const selectedRecipe = recipeData.find(recipe => recipe.id === Number(id));

    if(!selectedRecipe) {
        return <div>Recipe Not Found</div>
    }
 
  return (
    <div className='recipe__container'>
      {recipeData.map((recipe) => (
        <div key={recipe.id} className='recipe'>
          <div className='recipe__title'>{selectedRecipe.title}</div>
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
