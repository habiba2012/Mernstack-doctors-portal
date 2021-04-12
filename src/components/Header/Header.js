import React from 'react';
import NavBar from '../NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain'
import './Header.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;