import React, { useState, useRef, useEffect } from 'react';
import type { SearchResult } from '../types';

interface SearchBarProps {
  onSearch: (query: string) => Promise<SearchResult[]>;
}

const SearchBar = ({ onSearch }: SearchBarProps): React.ReactElement => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const resultsRef = useRef<HTMLUListElement>(null);
  const searchTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleSearch = async (): Promise<void> => {
      if (query.length >= 3) {
        setIsLoading(true);
        try {
          const searchResults = await onSearch(query);
          setResults(searchResults);
          setActiveIndex(-1);
        } catch (error) {
          console.error('Erreur de recherche:', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = window.setTimeout(handleSearch, 300);

    return () => {
      clearTimeout(searchTimeoutRef.current);
    };
  }, [query, onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        if (activeIndex >= 0 && results[activeIndex]) {
          // Handle selection
          setQuery(results[activeIndex].title);
          setResults([]);
        }
        break;
      case 'Escape':
        setResults([]);
        setActiveIndex(-1);
        break;
    }
  };

  return (
    <div className="relative w-full" role="search">
      <label htmlFor="search" className="block text-lg font-medium text-gray-900 mb-2">
        Rechercher une information juridique
      </label>
      <div className="relative">
        <div className="relative flex items-center">
          <svg 
            className="absolute left-4 h-5 w-5 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <input
            type="search"
            id="search"
            className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out shadow-sm"
            placeholder="Rechercher"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-controls="search-results"
            aria-describedby="search-description"
          />
          {isLoading && (
            <div
              className="absolute right-4 flex items-center"
              aria-live="polite"
            >
              <span className="sr-only">Recherche en cours...</span>
              <div className="animate-spin h-5 w-5 border-2 border-primary-600 rounded-full border-t-transparent"></div>
            </div>
          )}
        </div>
        <div id="search-description" className="mt-2 text-sm text-gray-600">
          Saisissez au moins 3 caractères pour voir les suggestions.
        </div>
      </div>

      {results.length > 0 && (
        <ul
          id="search-results"
          ref={resultsRef}
          className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200"
          role="listbox"
          aria-label="Résultats de recherche"
        >
          {results.map((result, index) => (
            <li
              key={result.id}
              role="option"
              aria-selected={index === activeIndex}
              className={`p-4 cursor-pointer transition duration-150 ease-in-out ${
                index === activeIndex 
                  ? 'bg-primary-50 border-l-4 border-primary-600' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                setQuery(result.title);
                setResults([]);
              }}
            >
              <div className="font-medium text-gray-900">{result.title}</div>
              <div className="mt-1 text-sm text-gray-700">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {result.category}
                </span>
                <p className="mt-1">{result.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar; 