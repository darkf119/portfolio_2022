import React from 'react';
import { Link } from 'react-router-dom';
import SocialNav from './SocialNav';

const Footer = () => {
    return (
        <footer className='portfolio-footer'>
            <SocialNav />
            <div className='statement'>Copyright © {new Date().getFullYear()} YuXi Peng | All Rights Reserved. <Link to="privacy-policy" title="Privacy Policy">Privacy Policy</Link></div>
        </footer>
    );
};

export default Footer;
