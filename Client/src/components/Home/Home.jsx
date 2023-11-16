import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from  '../../Assets/Images/1486405200970.jpeg';
import image2 from '../../Assets/Images/1592939451186.jpeg';
import image3 from '../../Assets/Images/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg';
import image4 from '../../Assets/Images/2466204_OvertheFireScallopedPotatoes4x3-1e2d91e12009443586521f41c045231d.jpg';
import image5 from '../../Assets/Images/Campfire-Nachos-Dutch-Oven-Camping-Recipe-6-1024x682.jpg';
import image6 from '../../Assets/Images/campfire-recipes-chicken-black-bean-nachos-1561663820.jpg';
import image7 from '../../Assets/Images/camping-recipes-hot-dogs-beans-1652103183.jpeg';
import image8 from '../../Assets/Images/camping-recipes-poblano-potato-packets-1652730060.jpeg';
import image9 from '../../Assets/Images/Chicken-Francese_4.webp';
import image10 from '../../Assets/Images/Easy-Camping-Meals-FEATURED.png';
import image11 from '../../Assets/Images/images.jpeg';
import image12 from  '../../Assets/Images/Oven-Roasted-Fried-Chicken.png';
import image13 from '../../Assets/Images/Panda-Express-Teriyaki-Chicken-thumbnail-500x500.jpg';
import image14 from '../../Assets/Images/sizzling-garlic-salmon-with-sheet-pan-potatoes-FT-RECIPE0422-eb5c9402ddd44d81aa471177c60bcfaa.jpg';

const imagePaths = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14
];

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

      const getImages = () => {
        const getIndex = Math.floor(Math.random() * images.length);
        const imageUrl = images[getIndex];
        console.log('Image URL:', imageUrl);
        return imageUrl;
      };

    return (
        <div className='recipe__container'>
            {recipeData.map((recipe, index) => (
                <div key={index} className='recipe__card'>
                    <div className='recipe__image' style={{ backgroundImage: `url(${getImages()})` }}>
                        <div className='title'>{recipe.title}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}   

export default Home;