import React, { useState, useEffect } from 'react';
import PaginationButtons from './PaginationButtons';
import { ImageResponse } from './types/ImageResponse';

interface ImageResultsProps {
    results: typeof ImageResponse;
}

const ImageResults = ({ results }: ImageResultsProps): JSX.Element => {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {results.items?.map((result, index) => (
                    <div key={index} className="mb-8">
                        <div className="group">
                            <a href={result.image.contextLink}>
                                <img
                                    src={result.link}
                                    alt={result.title}
                                    className="group-hover:shadow-xl w-full h-60 object-contain"
                                />
                            </a>
                            <a
                                href={result.image.contextLink}
                                className="group-hover:underline"
                            >
                                <h2 className="truncate text-xl">
                                    {result.title}
                                </h2>
                            </a>
                            <a
                                href={result.image.contextLink}
                                className="group-hover:underline"
                            >
                                <p className="text-gray-600">
                                    {result.displayLink}
                                </p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="ml-16">
                <PaginationButtons />
            </div>
        </div>
    );
};

export default ImageResults;
