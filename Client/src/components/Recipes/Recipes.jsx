  import { useParams } from 'react-router-dom';
  import './Recipes.scss';
  import { getImages, imagePaths, getIcons, iconPaths } from '../Images/Images';


  function Recipes({ recipeData }) {

      const { id } = useParams();
      const selectedRecipe = recipeData.find((recipe) => recipe.id === Number(id));

      if(!selectedRecipe) {
          return <div>Recipe Not Found</div>
      }

      const iconUrl = getIcons(1)[0]; 

      const iconStyle = {
        listStyle: 'none', 
        backgroundImage: `url(${iconUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        paddingLeft: '30px',
      };
  
    return (
      <div className='recipe__container'>
          <div key={selectedRecipe.id} className='recipe'>
            <div className='recipe__title'>{selectedRecipe.title}</div>
            <div className='recipe__container--img'>
              <img
                className='recipe__img'
                src={getImages()}
                alt="recipe"
              />
            </div>
            <div className='recipe__content'>
              <div className='recipe__ingredients--container'>
            <h3 className='recipe__heading'>Ingredients</h3>
            <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={`ingredient-${selectedRecipe.id}-${index}`} className='ingredients'>
                <img
                className='icon'
                src={getIcons()}
                alt={`icon-${index}`}
                style={{
                  width: '.7rem',
                  height: '.7rem',
                  marginRight: '1.3rem',
                  marginTop: '.3rem',
                }}
              />
                {ingredient}
              </li>
              ))}
            </ul>
            </div>
            <div className='recipe__instructions--container'>
            <h3 className='recipe__heading'>Directions</h3>
            <div className='instructions'>{selectedRecipe.instructions.join(' ')}</div>
            </div>
            </div>
          </div>
      </div>
    );
  };

  export default Recipes;
