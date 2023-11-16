import './Header.scss';
import Logo from "../../Assets/Logo/cookout.png";
import Button from "../Button/Button";

function Header() {

    return (
        <div  className='header__container'>
            <img alt="Logo" className="header__logo" src={Logo} />
            <form className='header__search'> 
                    <input placeholder='Search or Recipes' className='header__search--input' />
                    <Button>Seach</Button>
            </form>
        </div>
    )
}

export default Header;