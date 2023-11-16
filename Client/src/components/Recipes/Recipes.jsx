import { useParams } from 'react-router-dom';
import './Recipes.scss';
import { getImages, imagePaths } from '../Images/Images';


function Recipes({ recipeData, getImages }) {

    const { id } = useParams();
    const selectedRecipe = recipeData.find(recipe => recipe.id === Number(id));

    if(!selectedRecipe) {
        return <div>Recipe Not Found</div>
    }
 
  return (
    <div className='recipe__container'>
        <div key={selectedRecipe.id} className='recipe'>
          <div className='recipe__title'>{selectedRecipe.title}</div>
          <img
            className='recipe__img'
            src={getImages()}
            alt="recipe"
            />
          <ul>
          {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index} className='ingredients'>{ingredient}</li>
            ))}
          </ul>
          <div className='instructions'>{selectedRecipe.instructions.join(' ')}</div>
        </div>
    </div>
  );
};

export default Recipes;
