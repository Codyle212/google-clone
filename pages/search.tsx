import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter, NextRouter } from 'next/router';
import { Response } from '../components/types/Response';
import { ImageResponse } from '../components/types/ImageResponse';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import ImageResults from '../components/ImageResults';

interface SearchProps {
    results: typeof Response | typeof ImageResponse;
}

export default function Search({ results }: SearchProps) {
    const router: NextRouter = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Search Page</title>
            </Head>
            {/* Search Header */}
            <SearchHeader />
            {/* Search web and image Results */}
            {router.query.searchType === 'image' ? (
                <ImageResults results={results as typeof ImageResponse} />
            ) : (
                <SearchResults results={results as typeof Response} />
            )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const startIndex = context.query.start || '1';
    const mockData = false;
    const data = mockData
        ? ImageResponse
        : await fetch(
              `https://www.googleapis.com/customsearch/v1?key=${
                  process.env.GOOGLE_SEARCH_API_KEY
              }&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${
                  context.query.term
              }${
                  context.query.searchType && '&searchType=image'
              }&start=${startIndex}`
          ).then((response) => response.json());

    return { props: { results: data } };
};
