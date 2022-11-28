import React from 'react';
import { useRouter, NextRouter } from 'next/router';
import { SearchCategory } from '../SearchCatagory';

type Catagory = keyof typeof SearchCategory;

interface OptionProps {
    title: Catagory;
    Icon: (
        props: React.ComponentProps<'svg'> & {
            title?: string;
            titleId?: string;
        }
    ) => JSX.Element;
    selected: boolean;
}

const SearchHeaderOption = ({
    title,
    Icon,
    selected,
}: OptionProps): JSX.Element => {
    const router: NextRouter = useRouter();
    const selectTab = (title: Catagory) => {
        router.push(
            `/search?term=${router.query.term}&searchType=${
                title === 'Image' ? 'image' : ''
            }`
        );
    };

    return (
        <div
            className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
                selected && 'text-blue-500 border-blue-500'
            }`}
            onClick={() => selectTab(title)}
        >
            <Icon className="h-4" />
            <p>{title}</p>
        </div>
    );
};

export default SearchHeaderOption;
