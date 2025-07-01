import React from 'react';
import SearchBar from './SearchBar';
import type { Category, SearchResult } from '../types';

const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    title: 'Licenciement économique',
    category: 'travail',
    description: 'Comprendre les conditions et procédures du licenciement économique',
  },
  {
    id: '2',
    title: 'APL (Aide Personnalisée au Logement)',
    category: 'logement',
    description: 'Tout savoir sur les aides au logement',
  },
];

const Home = (): React.ReactElement => {
  const handleSearch = async (query: string): Promise<SearchResult[]> => {
    // Simulation d'une recherche
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_SEARCH_RESULTS.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="w-full px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Colonne de gauche - Recherche */}
        <div className="lg:col-span-3">
          <section aria-labelledby="search-heading" className="bg-white rounded-xl shadow-sm p-8 sticky top-24">
            <SearchBar onSearch={handleSearch} />
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recherches populaires</h3>
              <ul className="space-y-4">
                {MOCK_SEARCH_RESULTS.map(result => (
                  <li 
                    key={result.id} 
                    className="group p-4 bg-gray-50 rounded-lg hover:bg-sky-50 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <span className={`inline-block p-2 rounded-full ${
                          result.category === 'travail' 
                            ? 'bg-sky-100 text-sky-700' 
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {result.category === 'travail' ? '👔' : '🏠'}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
                          {result.title}
                        </h4>
                        <p className="mt-1 text-gray-700">{result.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home; 