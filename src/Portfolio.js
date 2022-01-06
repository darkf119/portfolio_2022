import logo from './logo.svg';
import React, { createRef } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Helmet } from 'react-helmet';



const Portfolio = () => {

  const theme = createRef();

  return (
    <Router>
      <Helmet>
        <meta name="robots" content="archive index" />
        <meta name="description" content="YuXi is a front-end developer who brings effective UI design to his projects. Results-driven, detail-oriented individual with a creative mind to offer solutions to web development projects." />
        <meta name="keywords" content="New Media Portfolio, front-end developer vancouver, frontend developer vancouver, web developer vancouver, YuXi Peng's portfolio, UI/UX designer vancouver, layout design, product mockups" />
        <meta name="author" content="YuXi Peng" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YuXi Peng | An Innovative Frontend Developer" />
        <meta property="og:site_name" content="YuXi Peng's Portfolio" />
        <meta property="og:url" content="https://yuxi-peng.com" />
        <meta property="og:image" name="image" content="/personal_branding_logo_07.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="YuXi is a front-end developer who brings effective UI design to his projects. Results-driven, detail-oriented individual with a creative mind to offer solutions to web development projects." />
        <meta name="twitter:text:title" content="" />
        <meta name="twitter:image" content="/personal_branding_logo_07.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yuxi-peng.com" />
        <meta name="twitter:description" content="YuXi is a front-end developer who brings effective UI design to his projects. Results-driven, detail-oriented individual with a creative mind to offer solutions to web development projects." />
        <meta name="msapplication-TileImage" content="/personal_branding_logo_07.png" />
        <link rel="apple-touch-icon-precomposed" href="/personal_branding_logo_07.png" />
        <title>YuXi Peng's Portfolio</title>

        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Helmet>
      <div className="portfolio">
        {/* Main Layout */}
        <Header />

        <Main />
        <Footer />

        {/* Side components - Scroll to top button */}
        {/* <ScrollToTop /> */}
      </div>
    </Router>
  );
};

export default Portfolio;


// function Portfolio() {
//   return (
//     <div className="portfolio">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default Portfolio;
