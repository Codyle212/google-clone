import { GetServerSideProps } from 'next';
import Image from 'next/image';
import type { Session } from 'next-auth';
import { useSession, signIn, signOut } from 'next-auth/react';
import defaultUserPic from '../public/defualt.jpg';

const User = (): JSX.Element => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    if (loading) {
        return <></>;
    }

    if (session && !loading) {
        return (
            <div
                onClick={(e) => {
                    e.preventDefault();
                    signOut();
                }}
            >
                <Image
                    src={session.user?.image || defaultUserPic}
                    alt={'profile-image'}
                    width={10}
                    height={10}
                    className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1"
                />
            </div>
        );
    } else {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    signIn();
                }}
                className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
            >
                Sign in
            </button>
        );
    }
};

export default User;
