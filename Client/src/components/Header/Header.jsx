import './Header.scss';
import Logo from "../../Assets/Logo/cookout.png";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import homeIcon from '../../Assets/Icons/tentHome.png';


function Header() {

    return (
        <div  className='header__container'>
            <img alt="Logo" className="header__logo" src={Logo} />
            <div className='header__search--container'>
                <Link to="/">
                    <img src={homeIcon} alt='home' className='header__home' />
                </Link>
                <form className='header__search'> 
                    <input placeholder='Search or Recipes' className='header__search--input' />
                    <Button>Seach</Button>
                </form>
            </div>
        </div>
    )
}

export default Header;