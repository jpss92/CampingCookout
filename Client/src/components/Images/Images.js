
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
import icon1 from '../../Assets/Icons/spices_icons/PNG/artichoke.png';
import icon2 from '../../Assets/Icons/spices_icons/PNG/basil.png';
import icon3 from '../../Assets/Icons/spices_icons/PNG/bay leaves.png';
import icon4 from '../../Assets/Icons/spices_icons/PNG/beet leaves.png';
import icon5 from '../../Assets/Icons/spices_icons/PNG/beet root.png';
import icon6 from '../../Assets/Icons/spices_icons/PNG/candlenut.png';
import icon7 from '../../Assets/Icons/spices_icons/PNG/celery.png';
import icon8 from '../../Assets/Icons/spices_icons/PNG/chilli pepper.png';
import icon9 from '../../Assets/Icons/spices_icons/PNG/cinnamon.png';
import icon10 from '../../Assets/Icons/spices_icons/PNG/clove.png';
import icon11 from '../../Assets/Icons/spices_icons/PNG/coriander.png';
import icon12 from '../../Assets/Icons/spices_icons/PNG/cumin.png';
import icon13 from '../../Assets/Icons/spices_icons/PNG/dill weed.png';
import icon14 from '../../Assets/Icons/spices_icons/PNG/finger roots.png';
import icon15 from '../../Assets/Icons/spices_icons/PNG/garlic.png';
import icon16 from '../../Assets/Icons/spices_icons/PNG/ginger.png';
import icon17 from '../../Assets/Icons/spices_icons/PNG/grain.png';
import icon18 from '../../Assets/Icons/spices_icons/PNG/green cordomom.png';
import icon19 from '../../Assets/Icons/spices_icons/PNG/java cordomom.png';
import icon20 from '../../Assets/Icons/spices_icons/PNG/lime.png';
import icon21 from '../../Assets/Icons/spices_icons/PNG/mushroom.png';
import icon22 from '../../Assets/Icons/spices_icons/PNG/mutard seeds.png';
import icon23 from '../../Assets/Icons/spices_icons/PNG/nutmeg.png';
import icon24 from '../../Assets/Icons/spices_icons/PNG/onion.png';
import icon25 from '../../Assets/Icons/spices_icons/PNG/paprika.png';
import icon26 from '../../Assets/Icons/spices_icons/PNG/parsley.png';
import icon27 from '../../Assets/Icons/spices_icons/PNG/pepper.png';
import icon28 from '../../Assets/Icons/spices_icons/PNG/red pepper.png';
import icon29 from '../../Assets/Icons/spices_icons/PNG/rosemary.png';
import icon30 from '../../Assets/Icons/spices_icons/PNG/sage.png';
import icon31 from '../../Assets/Icons/spices_icons/PNG/salt.png';
import icon32 from '../../Assets/Icons/spices_icons/PNG/scallions.png';
import icon33 from '../../Assets/Icons/spices_icons/PNG/sesame seeds.png';
import icon34 from '../../Assets/Icons/spices_icons/PNG/star anise.png';
import icon35 from '../../Assets/Icons/spices_icons/PNG/tamarind.png';
import icon36 from '../../Assets/Icons/spices_icons/PNG/thyme.png';
import icon37 from '../../Assets/Icons/spices_icons/PNG/tomato.png';
import icon38 from '../../Assets/Icons/spices_icons/PNG/turmeric leaves.png';
import icon39 from '../../Assets/Icons/spices_icons/PNG/turmeric.png';
import icon40 from '../../Assets/Icons/spices_icons/PNG/wasabi.png';

export const imagePaths = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14
];

export const iconPaths = [
    icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30, icon31, icon32, icon33, icon34, icon35, icon36, icon37, icon38, icon39, icon40
];

export const getImages = () => {
    const getIndex = Math.floor(Math.random() * imagePaths.length);
    const imageUrl = imagePaths[getIndex];
    return imageUrl;
};

export const getIcons = () => {
    const index = Math.floor(Math.random() * iconPaths.length);
    const iconUrl = iconPaths[index];
    return iconUrl;
}

export default { imagePaths, iconPaths };