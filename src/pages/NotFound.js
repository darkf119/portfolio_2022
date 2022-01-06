import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const NotFound = () => {
    return (
        <div className='notfound-page'>
            <Section>
                <div className="container">
                    <h1>Opps! This page does not exist.</h1>
                    <p>We cannot find the page you are looking for :(</p>
                    <Link to='/' className='btn' role='button'>Back to Homepage</Link>
                </div>
            </Section>
            <div className='backdrop-text'>404</div>
        </div>
    );
};

export default NotFound;
