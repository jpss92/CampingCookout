
import './Recipes.scss';


function Recipes({ recipeData}) {

  return (
    <div className='recipe__container'>
      {recipeData.map((recipe) => (
        <div key={recipe.id} className='recipe'>
          <div className='title'>{recipe.title}</div>
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
