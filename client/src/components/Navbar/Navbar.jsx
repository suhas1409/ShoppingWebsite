import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/styleHub2.png" alt="" />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">WOMEN</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">MEN</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">KIDS</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/ ">STYLEHUB</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/ ">HOMEPAGE</Link>
          </div>
          <div className="item">
            <Link className="link" to="/ ">ABOUT</Link>
          </div>
          <div className="item">
            <Link className="link" to="/ ">CONTACT</Link>
          </div>
          <div className="item">
            <Link className="link" to="/ ">STORES</Link>
          </div>
          <div className="icons">
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>  
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
