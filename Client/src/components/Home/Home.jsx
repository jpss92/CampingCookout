import './Home.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getImages, imagePaths } from '../Images/Images';


function Home({ recipeData }) {
    
    const [images, setImages] = useState([])
    const [someOtherState, setSomeOtherState] = useState([]);
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/camping_cookout/Server/recipes.json');
        setSomeOtherState(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };  

    useEffect(() => {
        const importImages = async () => {
            const importedImages = imagePaths.map((path) => {
                const imageModule = { default: path };
                return imageModule;
            });
    
            setImages(importedImages.map((image) => image.default));
        };
    
        fetchData();
        importImages();
    }, []);

    

    return (
        <div className='recipe__card--container'>
            {recipeData.map((recipe) => (
                <div key={`recipe-${recipe.id}`}  className='recipe__card'>
                    <Link to={`/recipes/${recipe.id}`}>
                    <div className='recipe__image' style={{ backgroundImage: `url(${getImages(recipe.id)})` }}>
                        <div className='title'>{recipe.title}</div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}   

export default Home;