import React from 'react';
import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import googleLogo from '../../public/google_logo.svg';
import Header from '../../components/Header';

interface SignInProps {
    providers: GetServerSideProps;
}

const SignIn = ({ providers }: SignInProps) => {
    return (
        <>
            <Header />
            <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div
                        key={provider.name}
                        className="flex flex-col items-center"
                    >
                        <Image
                            src={googleLogo}
                            alt="google logo"
                            width={120}
                            height={40}
                            className="w-52 object-cover"
                        />
                        <p className="text-sm italic my-10 text-center">
                            This Website is created for learning purposes and is
                            not intended for commercial use
                        </p>
                        <button
                            className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
                            onClick={() =>
                                signIn(provider.id, { callbackUrl: '/' })
                            }
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async () => {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
};
