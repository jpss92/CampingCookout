import './Header.scss';
import Logo from "../../Assets/Logo/cookout.png";
import Button from "../Button/Button";
import { Link, useNavigate } from 'react-router-dom';
import homeIcon from '../../Assets/Icons/tentHome.png';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


function Header({ recipeData, setSearchResults}) {

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        const results = searchRecipes();
        setSearchResults(results);
        setSearchQuery("");

        navigate('/', { state: { searchResults: results } });
    };

    const handleHomeClick = () => {
        setSearchQuery("");
        setSearchResults([]);
    };

    const searchRecipes = () => {
        const query = searchQuery.toLowerCase();
        
    return recipeData.filter((recipe) => {
      const isInTitle = recipe.title.toLowerCase().includes(query);
      const isInIngredients = recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      );
      const isInInstructions = recipe.instructions.join(' ').toLowerCase().includes(query);

      return isInTitle || isInIngredients || isInInstructions;
    });
  };
    
    return (
        <div  className='header__container'>
            <img alt="Logo" className="header__logo" src={Logo} />
            <div className='header__search--container'>
                <Link to="/" onClick={handleHomeClick}>
                    <img src={homeIcon} alt='home' className='header__home' />
                </Link>
                <form className='header__search' onSubmit={handleSearchSubmit}> 
                    <input 
                        placeholder='Search or Recipes' 
                        className='header__search--input' 
                        value={searchQuery}
                        onChange={handleSearchChange} 
                    />
                    <Button id="search__btn">Seach</Button>
                </form>
            </div>
        </div>
    )
}

export default Header;