import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

let images = [
    '../../Assets/Images/1486405200970.jpeg',
    '../../Assets/Images/1592939451186.jpeg',
    '../../Assets/Images/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg',
    '../../Assets/Images/2466204_OvertheFireScallopedPotatoes4x3-1e2d91e12009443586521f41c045231d.jpg',
    '../../Assets/Images/Campfire-Nachos-Dutch-Oven-Camping-Recipe-6-1024x682.jpg',
    '../../Assets/Images/campfire-recipes-chicken-black-bean-nachos-1561663820.jpg',
    '../../Assets/Images/camping-recipes-hot-dogs-beans-1652103183.jpeg',
    '../../Assets/Images/camping-recipes-poblano-potato-packets-1652730060.jpeg',
    '../../Assets/Images/Chicken-Francese_4.webp',
    '../../Assets/Images/Easy-Camping-Meals-FEATURED.png',
    '../../Assets/Images/images.jpeg',
    '../../Assets/Images/Oven-Roasted-Fried-Chicken.png',
    '../../Assets/Images/Panda-Express-Teriyaki-Chicken-thumbnail-500x500.jpg',
    '../../Assets/Images/sizzling-garlic-salmon-with-sheet-pan-potatoes-FT-RECIPE0422-eb5c9402ddd44d81aa471177c60bcfaa.jpg'
];


function Home({ recipeData }) {

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
        fetchData();
      }, []); 

      const getImages = () => {
        const getIndex = Math.floor(Math.random() * images.length);
        const imageUrl = images[getIndex];
        console.log('Image URL:', imageUrl);
        return imageUrl;
      };

    return (
        <div className='recipe__container'>
        {recipeData.map((recipe, index) => (
            <div key={index} className='recipe'>
                <div className='title'>{recipe.title}</div>
                <img
                    className='recipe__image'
                    src="/camping_cookout/Client/src/Assets/Logo"
                    alt='Recipe'
                />
            </div>  
        ))}
      </div>
    )
}   

export default Home;