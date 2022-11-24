import User from './User';

interface HeaderProps {}

const Header = (props: HeaderProps): JSX.Element => {
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">images</p>
                <User />
            </div>
        </header>
    );
};

export default Header;
