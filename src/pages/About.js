import React from 'react';
import Section from '../components/Section';
import ScrollDownHint from '../components/ScrollDownHint';

const About = () => {
    return (
        <div className="about-page">
            <Section className='hero-content'>
                <div className="container img-container profile-img-container">
                    <img src="../../../assets/images/me-yuxi-peng.jpg" alt="Picture of Me | YuXi Peng" />
                </div>

                <div className="container text-container">
                    <h1>About Me</h1>
                    <p>I'm a passionate individual when it comes to web development. I enjoy problem solving and debugging codes. To me , internet is a tool to help people communicate and stay connected. I always believed the internet has the power to do great things for humanity and the world. People create and share content on the web; this enables them to understand each other and appreciate their differences in culture, language, and lifestyle. These are what motivates me to be involved in the New Media industry. My mission is to help people through the internet with new media technologies.<br /><br />Currently a student enrolled in the <a href="https://www.bcit.ca/programs/new-media-design-and-web-development-diploma-full-time-6525dipma/" title="New Media Design and Web Development program page on BCIT's website" target="_blank">New Media Design and Web Development program at BCIT</a>, My main goal for the near future is to become a front-end web developer with enough skillset to design websites that can address commercial demand while also staying up to the latest industry trends.</p>
                </div>

                <ScrollDownHint />

                <div className="container img-container hero-img-container">
                    <img className="hero-bkg" src="../../../assets/images/about-bkg.jpg" alt="Background Image" />
                </div>


            </Section>
        </div>

    );
};

export default About;
