import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CgSearch} from "react-icons/cg";
import { MdOutlineShoppingCart} from "react-icons/md";
import {useStateValue} from './StateProvider'
import {auth, signOut} from './firebase'


export default function Header() {
    const [{user}] = useStateValue()
    const [{basket}] = useStateValue()


    const login = () => {
      if(user) {
        auth.signOut()
      }
    }
    console.log(user)
    
    
  return (
    <nav className="header">
      <Link to="/amazon-clone">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <CgSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/amazon-clone/login"}  className="header__link">
          <div onClick={() => login()} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ?'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to='/amazon-clone/login' className="header__link">
          <div  className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/amazon-clone/login" className="header__link">
          <div  className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to='/amazon-clone/checkout' className="header__link">
      <div className="header__optionBasket">
        <MdOutlineShoppingCart />
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
      </div>
      </Link>
    </nav>
  );
}
