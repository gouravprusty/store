import './Navbar.css';
import logo from '../../Assets/logo.png';
import caart_icon from '../../Assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return(
        <div className='navbar'>
            <div className="nav_logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav_menu">
                <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link> {menu === "shop" && <hr />}</li>
                <li onClick={() => {setMenu("men")}}><Link to='/men'>Men</Link> {menu === "men" && <hr />}</li>
                <li onClick={() => {setMenu("women")}}><Link to='/women'>Women</Link> {menu === "women" && <hr />}</li>
                <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link> {menu === "kids" && <hr />}</li>
            </ul>
            <div className="nav_login_cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={caart_icon} alt="Cart" /></Link>
                <div className="nav_cart_count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
};
