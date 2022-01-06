import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialNav = () => {

    return (
        <div className='navbar social-nav'>
            <div className="nav-content">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <a href='https://www.linkedin.com/in/yuxi-peng-8b6790149/' title='LinkedIn Profile' target='_blank'>
                            <GitHubIcon className='social-icon' sx={{ fontSize: 35 }} />
                        </a>
                    </li>
                    <li className="nav-list-item">
                        <a href='https://github.com/darkf119' title='GitHub Repository' target='_blank'>
                            <LinkedInIcon className='social-icon' sx={{ fontSize: 40 }} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialNav;
