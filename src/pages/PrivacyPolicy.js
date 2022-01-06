import React from 'react';
import Section from '../components/Section';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <Section>
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>When you visit this site, information about your visit (e.g. how you navigate the site) may be collected and stored. This information may include the length of your visit, the date and time of your visit, the pages you look at and the sites you visit before and after leaving this site. It does not include personally identifiable information such as your name, mailing or e-mail address or telephone number. We use this non-identifiable and aggregate information to better design this Web site and develop an efficient Web marketing plan. We also may share this information with our Web designer, board of directors and sponsors.</p>
                    <h4><strong>This site may collect the following non-identifiable information when you visit this Web site:</strong></h4>
                    <ul>
                        <li>Your Internet Service Provider (ISP)</li>
                        <li>Time of your visit</li>
                        <li>Pages you visited</li>
                        <li>Web Browser Used</li>
                    </ul>
                    <h4><i>What If I Do Not Agree With this Privacy Policy?</i></h4>
                    <p>By visiting this Web site and voluntarily providing personal information to "Your Name or Your Business Name" Web site, you agree to the terms of this online User Agreement and the Privacy Policy contained herein. However, We welcome your comments and/or suggestions on improving this Web site and policies.</p>
                </div>
            </Section>
        </div>
    );
};

export default PrivacyPolicy;
