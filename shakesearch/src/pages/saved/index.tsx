import Nav from '@/components/Nav';
import SearchResultCard from '@/components/SearchResultCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default () => {
  const [savedSearchResults, setSavedSearchesResults] = useState<Array<string>>([]);
  useEffect(() => {
    const searches = localStorage.getItem("searches");

    const searchesJSON = JSON.parse(searches);
    console.log(searchesJSON)
    const searchStrings = Object.keys(searchesJSON);

    if (searchStrings.length) {
      setSavedSearchesResults(searchStrings);
    }

  }, [])
  return (
    <div>
      <Nav />
      <div>
        {savedSearchResults.length && savedSearchResults.map((searchResult, idx) => {
          console.log(searchResult)
          return (
            <div>
              <a href={`/saved/${searchResult}`} key={idx}>{`${searchResult}`}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}