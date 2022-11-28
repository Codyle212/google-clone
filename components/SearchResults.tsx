import React from 'react';
import { Response } from './types/Response';
import Parser from 'html-react-parser';

interface SearchResultsProps {
    results: typeof Response;
}

const SearchResults = ({ results }: SearchResultsProps): JSX.Element => {
    return (
        <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {results.searchInformation.formattedTotalResults} results
                ({results.searchInformation.formattedSearchTime} seconds)
            </p>
            {results.items.map((result, index) => (
                <div key={index} className="max-w-xl mb-8 ">
                    <div className="group">
                        <a href={result.link} className="text-sm truncate">
                            {result.formattedUrl}
                        </a>
                        <a
                            href={result.link}
                            className="group-hover:underline decoration-blue-800"
                        >
                            <h2 className="truncate text-xl font-medium text-blue-800">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="text-gray-600">
                        {Parser(result.htmlSnippet)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
