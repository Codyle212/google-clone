import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import defaultUserPic from '../public/defualt.jpg';

interface UserProps {
    className?: string;
}

const User = (props: UserProps): JSX.Element => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    if (loading) {
        return <></>;
    }

    if (session && !loading) {
        return (
            <Image
                src={session.user?.image || defaultUserPic}
                alt={'profile-image'}
                width={10}
                height={10}
                onClick={(e): void => {
                    e.preventDefault();
                    signOut();
                }}
                className={`w-10 h-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${props.className}`}
            />
        );
    } else {
        return (
            <button
                onClick={(e): void => {
                    e.preventDefault();
                    signIn();
                }}
                className={`bg-blue-500 text-white whitespace-nowrap px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${props.className}`}
            >
                Sign in
            </button>
        );
    }
};

export default User;
