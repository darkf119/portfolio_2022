import React, { useEffect } from 'react';
import {
    Routes as Switch,
    Route
} from 'react-router-dom';
// Import views for Routing
import Home from '../pages/Home';
import Project from '../pages/SingleProject';
import Projects from '../pages/Projects';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PrivacyPolicy from '../pages/PrivacyPolicy';

// import reducer from './data/reducer';
// import { StateProvider } from '../data/StateProvider';

const Main = () => {

    // const featuredProjState = {
    //     id: null,
    //     title: null,
    //     isFeatured: true,
    //     featuredImg: null,
    //     overview: null,
    //     contributors: [],
    //     skills: [],
    //     techSpecs: [],
    //     process: []
    // };

    // const defaultProjState = {
    //     id: null,
    //     title: null,
    //     isFeatured: false,
    //     featuredImg: null,
    //     overview: null,
    //     contributors: [],
    //     skills: [],
    //     techSpecs: [],
    //     process: []
    // };


    return (

        <main className='portfolio-main'>
            <Switch>

                <Route path="/" element={<Home />} exact />
                <Route path="projects" element={<Projects />} exact />
                {/* <Route path="projects/:id" element={<Project />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} exact />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </main>

    );
};

export default Main;
