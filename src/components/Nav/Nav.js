import React from 'react';

import logo from '../../img/mw-logo.png'

import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <div>
            <nav>
                <img src={logo} />
                {/* <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                </ul> */}
            </nav>
        </div>
    )
}

export default Nav;