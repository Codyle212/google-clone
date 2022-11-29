import React from 'react';
import Link from 'next/link';

const Footer = (): JSX.Element => {
    return (
        <footer className="fixed bottom-0 p-6 text-gray-600 bg-[#f8f9fa] w-full ">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between  items-center text-xs ">
                <div className="flex space-x-8 mx-5 sm:ml=0 ">
                    <Link href="https://ads.google.com/">
                        <p className="link">Advertising</p>
                    </Link>
                    <Link href="https://smallbusiness.withgoogle.com/">
                        <p className="link">Business</p>
                    </Link>
                    <Link href="https://www.google.com/search/howsearchworks/">
                        <p className="link">How Search Works</p>
                    </Link>
                </div>
                <div className="flex space-x-8 mx-5 ">
                    <Link href="https://policies.google.com/privacy">
                        <p className="link">Privacy</p>
                    </Link>
                    <Link href="https://policies.google.com/terms">
                        <p className="link">Terms</p>
                    </Link>
                    <Link href="https://www.google.com/preferences">
                        <p className="link">Settings</p>
                    </Link>
                </div>
            </div>

            {/* Copyright &copy; {new Date().getFullYear()} Cody Le */}
        </footer>
    );
};

export default Footer;
