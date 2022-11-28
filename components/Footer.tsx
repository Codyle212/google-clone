import React from 'react';

const Footer = (): JSX.Element => {
    return (
        <footer className="fixed bottom-0 p-6 text-gray-600 bg-[#f8f9fa] w-full ">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between  items-center text-xs ">
                <div className="flex space-x-8 mx-5 sm:ml=0 ">
                    <a href="https://ads.google.com/">
                        <p className="link">Advertising</p>
                    </a>
                    <a href="https://smallbusiness.withgoogle.com/">
                        <p className="link">Business</p>
                    </a>
                    <a href="https://www.google.com/search/howsearchworks/">
                        <p className="link">How Search Works</p>
                    </a>
                </div>
                <div className="flex space-x-8 mx-5 ">
                    <a href="https://policies.google.com/privacy">
                        <p className="link">Privacy</p>
                    </a>
                    <a href="https://policies.google.com/terms">
                        <p className="link">Terms</p>
                    </a>
                    <a href="https://www.google.com/preferences">
                        <p className="link">Settings</p>
                    </a>
                </div>
            </div>

            {/* Copyright &copy; {new Date().getFullYear()} Cody Le */}
        </footer>
    );
};

export default Footer;
