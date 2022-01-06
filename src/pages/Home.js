// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import useFetchData from '../data/useFetchData';
import Logo1 from '../assets/icons/Logo/Logo1';
import Section from '../components/Section';
import ProjectDisplay from '../components/ProjectDisplay';
import ScrollDownHint from '../components/ScrollDownHint';
// import { useStateValue } from '../data/StateProvider';

const Home = (props) => {

    // const [{id}, dispatch] = useStateValue();

    return (

        <div className='home-page'>
            <Section className='hero-content'>
                <div className='row'>
                    <div className="container">
                        <h1 className='hero-heading'>Hi, <Link to='about'>I</Link> am YuXi Peng</h1>
                        <div className="hero-subheading">front end developer</div>
                    </div>
                </div>
                <Logo1 className='logo logo-decor decor-small' />
                <Logo1 className='logo logo-decor decor-big' />
                <ScrollDownHint />

            </Section>
            <Section className='featured-projects'>
                <h2>Selected Projects</h2>
                <div className='row'>
                    <ProjectDisplay featured={true} />
                </div>
            </Section>
        </div>
    );
};

export default Home;
