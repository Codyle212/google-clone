import User from './User';

interface HeaderProps {}

const Header = (props: HeaderProps): JSX.Element => {
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <a href="https://about.google/">
                    <p className="link">About</p>
                </a>
                <a href="https://store.google.com/">
                    <p className="link">Store</p>
                </a>
            </div>
            <div className="flex space-x-4 items-center">
                <a href="https://mail.google.com/">
                    <p className="link">Gmail</p>
                </a>

                <p className="link">images</p>
                <User />
            </div>
        </header>
    );
};

export default Header;
