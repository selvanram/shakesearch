import Nav from '@/components/Nav';
import SearchResultCard from '@/components/SearchResultCard';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default () => {
  const [searchResults, setSearchResults] = useState<Array<string>>([]);
  const router = useRouter();
  console.log(router.isReady)
  useEffect(() => {
    if (router.isReady) {
      const items = localStorage.getItem("searches");
      if (!items) {
        return;
      }
  
      const json = JSON.parse(items);
      const searchQuery = router.query['savedId'];
      const searchResults = json[searchQuery];
      setSearchResults(searchResults);
    }
  }, [router.isReady]);

  const onDelete = (searchId: number) => {
    const searches = localStorage.getItem("searches");
    const json = JSON.parse(searches);
    const searchQuery = router.query['savedId'];
    const searchResults = json[searchQuery];
    const newSearchResults = [...searchResults.slice(0, searchId), ...searchResults.slice(searchId + 1)];
    debugger;
    const newSearches = { ...json, [`${searchQuery}`]: newSearchResults };
    localStorage.setItem("searches", JSON.stringify(newSearches));
    setSearchResults(newSearchResults);
  }

  return (
    <div>
      <Nav />
      { searchResults.map((result, idx) => {
        return (
          <SearchResultCard
            key={idx}
            searchResult={result}
            idx={idx}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  )
}

/**
 * the id is in the query
 * Use the query to find the 
 * 
 */