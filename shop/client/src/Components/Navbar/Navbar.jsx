
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)
    return ( <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/en.png"/>
                    <ArrowDropDownIcon />
                </div>
                <div className="item">
                    <span>EGP</span>
                    <ArrowDropDownIcon />
                </div>
                <div className="item">
                    <Link className="link" to="/product/1">Women</Link>
                </div>
                <div className="item">
                    <Link  className="link" to="/product/2">Men</Link>
                </div>
                <div className="item">
                    <Link  className="link" to="/product/3">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link  className="link" to="/">LAMASTORE</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className="link" to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link  className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link  className="link" to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonIcon />
                    <FavoriteBorderIcon />
                    <div className="cartIcon">
                        <ShoppingCartIcon onClick={()=>setOpen(!open)} />
                        <span>{products.length}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        {open && <Cart/>}

    </div> );
}
 
export default Navbar;