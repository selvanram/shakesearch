import React, { useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import SearchResultCard from '@/components/SearchResultCard';

import { RESULTS } from "../test";
import Logo from '@/components/Logo';

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const fetchResults = async () => {
    // const results = await fetch(`/api/hello?q=${searchInput}`, {
    //   method: 'GET',
    // });
    // const json = await results.json();
    setSearchResults(RESULTS);
  }
  const handleInputChange = (e) => {
    const text = e.currentTarget.value;
    setSearchInput(text);
  }
  const handleButtonClick = async () => {
    setActiveSearchQuery("");
    fetchResults();
    setActiveSearchQuery(searchInput)
  }

  const onResultSave = (searchResult: string) => {
    const items = localStorage.getItem("searches");
    const itemsJSON = JSON.parse(items);
    if (!items) {
      localStorage.setItem("searches", JSON.stringify({ [activeSearchQuery]: [searchResult] }));
    } else {
      if (itemsJSON) {
        if (itemsJSON[activeSearchQuery]) {
          itemsJSON[activeSearchQuery].push(searchResult);
        } else {
          itemsJSON[activeSearchQuery] = [searchResult];
        }
      }
      localStorage.setItem("searches", JSON.stringify({ ...itemsJSON }));
    }
  }

  return (
    <>
      <Head>
        <title>Vijay - Shakesearch</title>
      </Head>
      <main className={styles.main}>
        <Logo />
        <Nav />
        <input value={searchInput} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Search</button>
        <div>
          {searchResults.length && searchResults.map((result: string, idx: number) => {
            return (
              <SearchResultCard
                onSave={onResultSave}
                searchResult={result} 
                key={idx}
                idx={idx}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}

// Next things to do:
/**
 * 1 - Design the search page
 * 2 - highlight the searched for phrase
 * 4 - character limit
 * 
 * 
 */

/**
  Design the search page.
  1 - Let's get a logo going on each page.
  2 - Grab icons for the search button and the saved button.
  3 - 

 */