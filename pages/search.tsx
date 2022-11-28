import React from 'react';
import { Response } from '../Response';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import { GetServerSideProps } from 'next';

interface SearchProps {
    results: Object;
}

export default function search({ results }: SearchProps) {
    console.log(results);
    return (
        <div>
            <Head>
                <title>Search Page</title>
            </Head>
            {/* Search Header */}
            <SearchHeader />
            {/* Search Results */}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const mockData = true;

    const data = mockData
        ? Response
        : await fetch(
              `https://www.googleapis.com/customsearch/v1?key=${
                  process.env.GOOGLE_SEARCH_API_KEY
              }&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${
                  context.query.term
              }${context.query.searchType && '&searchType=image'}`
          ).then((response) => response.json());
    return { props: { results: data } };
};
