import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../images/ic_navi_back_24.png'

function Navbar() {
    return (
        <nav id="naviHeader">
            {/* <ul> */}
            <Link to="/"><img className="imgNaviBack" src={backIcon} alt=""/></Link>
            <li id="brand">이벤트</li>
            {/* </ul> */}
        </nav>
    );
}

export default Navbar;