import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';
import googleLogo from '../public/google_logo.svg';
import {
    MagnifyingGlassIcon,
    MicrophoneIcon,
    CameraIcon,
    XMarkIcon,
} from '@heroicons/react/20/solid';
import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = (): JSX.Element => {
    const router: NextRouter = useRouter();
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearchClick = (event: React.MouseEvent<SVGElement>) => {
        event.preventDefault();
        Search();
    };

    const handleKeyPressed = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            event.preventDefault();
            Search();
        }
    };

    const Search = () => {
        const term = searchInputRef.current!.value;
        if (!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-ful p-6 items-center">
                <Image
                    src={googleLogo}
                    alt="google logo"
                    width={120}
                    height={40}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                    <input
                        type="text"
                        defaultValue={router.query.term}
                        ref={searchInputRef}
                        className="w-full focus:outline-none"
                        onKeyPress={handleKeyPressed}
                    />
                    <XMarkIcon
                        onClick={(): void => {
                            searchInputRef.current!.value = '';
                        }}
                        className="h-7 text-gray-500 cursor-pointer sm:mr-3"
                    />
                    <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
                    <CameraIcon className="h-6 hidden sm:inline-flex text-blue-500 mr-3" />
                    <MagnifyingGlassIcon
                        className="h-6 hidden sm:inline-flex text-blue-500"
                        onClick={handleSearchClick}
                    />
                </form>
                <User className="ml-auto" />
            </div>
            <SearchHeaderOptions />
        </header>
    );
};

export default SearchHeader;
