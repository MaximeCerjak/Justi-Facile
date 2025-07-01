import React from 'react';

const About = (): React.ReactElement => {
  return (
    <div className="w-full px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">À Propos de JustiFacile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Mission</h2>
          <p className="text-gray-600 mb-6">
            Chez JustiFacile, nous croyons que l'accès à l'information juridique est un droit fondamental. 
            Notre mission est de démocratiser le droit en le rendant plus accessible, compréhensible et 
            abordable pour tous les citoyens.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos Valeurs</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mr-3 mt-1">✨</span>
              <div>
                <h3 className="font-semibold text-gray-900">Accessibilité</h3>
                <p className="text-gray-600">Rendre l'information juridique accessible à tous, sans jargon complexe.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mr-3 mt-1">🤝</span>
              <div>
                <h3 className="font-semibold text-gray-900">Transparence</h3>
                <p className="text-gray-600">Être clair et honnête dans nos services et nos communications.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mr-3 mt-1">💡</span>
              <div>
                <h3 className="font-semibold text-gray-900">Innovation</h3>
                <p className="text-gray-600">Utiliser la technologie pour simplifier l'accès au droit.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notre Équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">👩‍⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Marie Dubois</h3>
              <p className="text-gray-600 text-center">Fondatrice & Juriste</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Thomas Martin</h3>
              <p className="text-gray-600 text-center">Directeur Technique</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Sophie Bernard</h3>
              <p className="text-gray-600 text-center">Responsable Client</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">👨‍⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Pierre Leroy</h3>
              <p className="text-gray-600 text-center">Expert Juridique</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 