import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer_text">Created by Patrick Lehmann.</div>
            <div className="footer_text">
                <a
                    className='footer_link'
                    href='https://www.github.com/patlehmann1/hacker_news'
                    target='_blank' rel="noopener noreferrer"> 
                    <i class="fab fa-github"></i> See the code here
                </a>
            </div>
        </footer>
    );
};

export default Footer;