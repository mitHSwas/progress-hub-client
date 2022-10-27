import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <small>This Terms and Conditions (this “Agreement or Terms”) shall governs your use of all Products including services from HT Media Limited (“HTML”, “Shine” or “we” or “us”) as offered from time to time, unless other terms and conditions expressly govern. The User of the website ("User") must carefully read and agree to the following Terms including any future amendments before using the website.

                These Terms govern User’s access to and use of the website, mobile application or other online products & services where these Terms are posted (“Site”). By using or connecting to the Site through a third party or by accessing, browsing, or using the Site in any manner, User agree to be bound to these Terms and our Privacy Policy, whether or not User registered with the Site. The Site reserves the right to deny access to any person who violates these Terms.

                We will do our utmost to ensure that availability of the Site will be uninterrupted and that transmissions will be error-free. However, due to the nature of the Internet, this cannot be guaranteed. Also, User access to the Site may also be occasionally suspended or restricted to allow for repairs, maintenance, or services at any time without prior notice. We will attempt to limit the frequency and duration of any such suspension or restriction.</small>
            <h5>Terms and Conditions:</h5>
            <samll>The term “Product" refers to Online Courses or Courses & Job Assistance Services including other services available from us, including but not limited to Premium Products for the Users.

                The User is required to purchase anything for the use of Product. The User, who has subscribed for the specific Products available on the Site, shall have the right to access those Products. We may also change, suspend or discontinue any aspect of Product at any time, including the availability of any Product or Service. We may also impose or limit any feature or restrict access to User to parts or all of the Product or Service without notice or liability. We reserve the right to modify the Product at any time, without any prior approval or consent from the User. The User shall have the access to the Product as per applicable enrollment fee.</samll>

            <h5>Privacy policy:</h5>
            <small>By using the Products of us, User hereby agrees and indicate that he or she has understand the disclosure practices described in the Privacy Policy.

                Notwithstanding User’s registration with National Do Not Call Registry (In Fully or Partly blocked category under National Customer Preference Register set up under Telecom Regulatory Authority of India), User hereby expresses his or her interest and accord its willful consent to receive communication (including commercial communication) in relation to Products provided by us. User further confirms that any communication, as mentioned hereinabove, shall not be construed as Unsolicited Commercial Communication under the TRAI guidelines and User has specifically opted to receive communication in this regard on the telephone or mobile number provided by him or her.</small>
            <br />
            <br></br>
            <Link to="/register">Go back register</Link>
        </div>
    );
};

export default TermsAndConditions;