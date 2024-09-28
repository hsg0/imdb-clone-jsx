import React from 'react';
import Results from '@/components/Results';

const SearchPage = async ({ searchParams }) => {
  const searchTerm = searchParams.searchTerm;

  // Fetch the data
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await response.json();
  const results = data.results;

  return (
    <div>
      {/* Correct conditional rendering for no results */}
      {results && results.length === 0  (
        <p className="text-center pt-6">No results found</p>
      ) 
}
{
        <Results results={results} />
      }
    </div>
  );
};

export default SearchPage;