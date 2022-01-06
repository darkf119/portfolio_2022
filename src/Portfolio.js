import logo from './logo.svg';
import React, { createRef } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialNav from './components/SocialNav';



const Portfolio = () => {

  const theme = createRef();

  return (
    <Router>
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
