import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter, NextRouter } from 'next/router';
import { Response } from '../Response';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';

interface SearchProps {
    results: typeof Response;
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
            {/* Search Results */}
            <SearchResults results={results} />
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
