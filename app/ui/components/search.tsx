'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; //limits the rate at which a function can fire\\

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); //can use it to get the params string like ?page=1&query=a\\
  const pathname = usePathname(); //Use Next.js's useRouter and usePathname hooks to update the URL\\
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);//Web API that provides utility methods for manipulating the URL query parameters\\
    params.set('page', '1');//reset the page number to 1\\
    //set the params string based on the user’s input. If the input is empty, you want to delete it\\
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    //updates the URL with the user's search data -- example: /dashboard/invoices?query=lee if the user searches for "Lee"\\
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
} 