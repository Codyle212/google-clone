import { useRouter, NextRouter } from 'next/router';
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/outline';
import SearchHeaderOption from './SearchHeaderOption';
import { SearchCategory } from '../SearchCatagory';

const SearchHeaderOptions = (): JSX.Element => {
    const router: NextRouter = useRouter();
    return (
        <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b ">
            <SearchHeaderOption
                title={SearchCategory.All}
                Icon={MagnifyingGlassIcon}
                selected={
                    router.query.searchType === '' || !router.query.searchType
                }
            />
            <SearchHeaderOption
                title={SearchCategory.Image}
                Icon={PhotoIcon}
                selected={router.query.searchType === 'image'}
            />
        </div>
    );
};

export default SearchHeaderOptions;
