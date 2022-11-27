import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import Image from 'next/image';
import googleLogo from '../public/google_logo.svg';
import {
    MagnifyingGlassIcon,
    MicrophoneIcon,
    CameraIcon,
} from '@heroicons/react/20/solid';
import { MouseEventHandler, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const router: NextRouter = useRouter();
    const searchInputRef = useRef<HTMLInputElement>(null);

    const search = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();

        if (searchInputRef.current != null) {
            // 👇️ using non-null (!) assertion
            const term = searchInputRef.current?.value;
            if (!term.trim()) return;
            router.push(`/search?term=${term.trim()}`);
        }
    };
    return (
        <div>
            <Head>
                <title>Google Clone</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*Header*/}
            <Header />
            {/*Body*/}
            <form className="flex flex-col items-center mt-40">
                <Image
                    src={googleLogo}
                    objectFit="cover"
                    alt="google logo"
                    width={300}
                    height={100}
                />
                <div className="flex w-full mt-5 mx-auto max-width-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
                    <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow focus:outline-none"
                    />

                    <MicrophoneIcon className="h-5 mr-5" />
                    <CameraIcon className="h-5" />
                </div>
                <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
                    <button onClick={search} className="btn">
                        Google Search
                    </button>
                    <button className="btn">{`I'm Feeling Lucky`}</button>
                </div>
            </form>
            {/*Footer*/}
            <Footer />
        </div>
    );
}
