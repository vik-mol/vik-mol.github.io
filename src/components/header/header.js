import React, { useState, useEffect } from 'react';
import svglogo from '../../assets/logo.svg';
import svglogoM from '../../assets/logoM.svg';
import './header.sass';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__flex">
                    <div className="header__logo-box">
                        <div className="header__logo"><HookLogo /></div>
                        <a className="header__link" href={'#'}>Открыть счет</a>
                    </div>
                    <a href={'tel:+78005005545'} className="header__phone">8 800 500 55 45</a>
                </div>
            </div>
        </header>
    )
}

const HookLogo = () => {
    const [logo, setLogo] = useState(svglogo);
    useEffect(() => {
        if (window.innerWidth <= 640) { setLogo(svglogoM) }
    }, [logo]);
    return <img src={logo} alt="" />
}

export default Header;