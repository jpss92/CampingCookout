
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

export const getImages = () => {
    const getIndex = Math.floor(Math.random() * imagePaths.length);
    const imageUrl = imagePaths[getIndex];
    return imageUrl;
};

export default imagePaths;