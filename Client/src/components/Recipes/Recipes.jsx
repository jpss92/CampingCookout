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
      
      console.log(getIcons)

      const iconStyle = {
        listStyle: 'none', // Hide the default marker
        backgroundImage: `url(${iconUrl})`, // Use getIcons(1) to get one icon URL
        backgroundSize: 'contain', // Adjust the size as needed
        backgroundRepeat: 'no-repeat',
        paddingLeft: '30px', // Adjust the padding as needed
      };
  
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
                <li key={index} className='ingredients'>
                <img
                className='icon'
                src={iconUrl[index]}
                alt={`icon-${index}`}
                style={{
                  width: '20px', // Adjust the size as needed
                  height: '20px',
                  marginRight: '5px', // Adjust the spacing as needed
                }}
              />
                {ingredient}
              </li>
              ))}
            </ul>
            <div className='instructions'>{selectedRecipe.instructions.join(' ')}</div>
          </div>
      </div>
    );
  };

  export default Recipes;
