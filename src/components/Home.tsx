import React from 'react';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
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

const TABS = [
  {
    id: 'logement' as Category,
    label: 'Logement',
    content: (
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Droit du logement</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
            <a href="#" className="block">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                  🏠
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Location et bail</h4>
              </div>
              <p className="text-gray-600">Tout savoir sur vos droits et obligations en tant que locataire ou propriétaire</p>
            </a>
          </li>
          <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
            <a href="#" className="block">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                  💶
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Aides au logement</h4>
              </div>
              <p className="text-gray-600">Découvrez les aides disponibles pour votre logement</p>
            </a>
          </li>
          <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
            <a href="#" className="block">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                  🏢
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Copropriété</h4>
              </div>
              <p className="text-gray-600">Comprendre le fonctionnement et la gestion d'une copropriété</p>
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'travail' as Category,
    label: 'Travail',
    content: (
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Droit du travail</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            📄
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Contrat de travail</h4>
                    </div>
                    <p className="text-gray-600">Tout savoir sur vos droits et obligations en tant que salarié</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            ⚖️
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Licenciement</h4>
                    </div>
                    <p className="text-gray-600">Comprendre les conditions et procédures du licenciement</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🌴
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Congés payés</h4>
                    </div>
                    <p className="text-gray-600">Tout savoir sur vos droits aux congés payés</p>
                </a>
            </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'famille' as Category,
    label: 'Famille',
    content: (
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Droit de la famille</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            💑
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Mariage et PACS</h4>
                    </div>
                    <p className="text-gray-600">Les différentes formes d'union et leurs implications juridiques</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            📋
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Divorce</h4>
                    </div>
                    <p className="text-gray-600">Comprendre les conditions et procédures du divorce</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            👨‍👩‍👧‍👦
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Autorité parentale</h4>
                    </div>
                    <p className="text-gray-600">Comprendre les droits et devoirs des parents</p>
                </a>
            </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'sante' as Category,
    label: 'Santé',
    content: (
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Droit de la santé</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🏥
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Droits des patients</h4>
                    </div>
                    <p className="text-gray-600">Connaître vos droits en tant que patient et les recours possibles</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🩺
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Sécurité sociale</h4>
                    </div>
                    <p className="text-gray-600">Comprendre le système de protection sociale et vos remboursements</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            ⚕️
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Mutuelle santé</h4>
                    </div>
                    <p className="text-gray-600">Choisir et comprendre votre complémentaire santé</p>
                </a>
            </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'immobilier' as Category,
    label: 'Immobilier',
    content: (
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Droit de l'immobilier</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🏗️
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Construction</h4>
                    </div>
                    <p className="text-gray-600">Les étapes et garanties d'un projet de construction</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            📋
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Transactions</h4>
                    </div>
                    <p className="text-gray-600">Achat, vente et formalités immobilières</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🏘️
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Copropriété</h4>
                    </div>
                    <p className="text-gray-600">Gérer et vivre en copropriété</p>
                </a>
            </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'consommation' as Category,
    label: 'Consommation',
    content: (
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Droit de la consommation</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🛍️
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Achats en ligne</h4>
                    </div>
                    <p className="text-gray-600">Vos droits pour les achats sur internet</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            ⚖️
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Garanties</h4>
                    </div>
                    <p className="text-gray-600">Garanties légales et commerciales de vos achats</p>
                </a>
            </li>
            <li className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-primary-500 transition-colors duration-200">
                <a href="#" className="block">
                    <div className="flex items-center mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-3">
                            🔄
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">Litiges</h4>
                    </div>
                    <p className="text-gray-600">Résoudre un litige avec un professionnel</p>
                </a>
            </li>
        </ul>
      </div>
    ),
  }
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
          <section className="bg-white rounded-xl shadow-sm p-8 sticky top-24">
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

        {/* Colonne de droite - Catégories */}
        <div className="lg:col-span-9">
          <section aria-labelledby="categories-heading" className="bg-white rounded-xl shadow-sm p-8">
            <h2 id="categories-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Explorer par catégorie
            </h2>
            <div className="max-w-none">
              <Tabs tabs={TABS} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home; 