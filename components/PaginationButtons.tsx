import React from 'react';
import Link from 'next/link';
import { useRouter, NextRouter } from 'next/router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const PaginationButtons = (): JSX.Element => {
    const PAGES = 10;
    const ITEM_PER_PAGE = 10;
    const router: NextRouter = useRouter();
    const startIndex = Number(router.query.start) || 1;
    const pageLinks = [];
    for (let i = 0; i < PAGES; i++) {
        pageLinks.push(
            <Link
                key={i}
                href={`/search?term=${router.query.term}&searchType=${
                    router.query.searchType
                }&start=${i * PAGES + 1}`}
                className={`cursor-pointer flex flex-col item-center hover:underline ${
                    Math.floor(startIndex / 10) === i && 'text-gray-700' //selected page is blace
                }`}
            >
                {i + 1}
            </Link>
        );
    }

    return (
        <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-4 sm-px-0">
            {startIndex > 1 * ITEM_PER_PAGE && (
                <Link
                    href={`/search?term=${router.query.term}&searchType=${
                        router.query.searchType
                    }&start=${startIndex - 10}`}
                >
                    <div className="cursor-pointer flex flex-col items-center hover:underline">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {pageLinks.map((pageLink) => pageLink)}
            {startIndex < (PAGES - 1) * ITEM_PER_PAGE && (
                <Link
                    href={`/search?term=${router.query.term}&searchType=${
                        router.query.searchType
                    }&start=${startIndex + 10}`}
                >
                    <div className="cursor-pointer flex flex-col items-center hover:underline">
                        <ChevronRightIcon className="h-5" />
                        <p>Next</p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default PaginationButtons;
