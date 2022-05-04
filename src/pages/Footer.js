import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer-content">
            <p><Link to='/about' className="link">Learn more</Link> about this project</p>
            <p>Having issues? Contact us: <a className="link" href = "mailto:ganlin@uw.edu">ganlin@uw.edu</a></p>
        </div>
    )
}

export default Footer;