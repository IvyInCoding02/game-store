import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import '../Header/../style.css';

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header__wrapper">
            <Link to='/' className ="header__logo">GAME STORE</Link>
            <div style={{
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
                }}>
            <BsCart className = "header__cart"/>
            <span style={{fontWeight: 'bold'}}>3333рублей</span>
            </div>
            </div>    
        </div>
    </header>
  )
}

export default Header;