import React from 'react';

const Services = (): React.ReactElement => {
    return (
        <div className="w-full px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">📚</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Juridique</h2>
                    <p className="text-gray-600">Accédez à une base de connaissances complète sur vos droits et obligations dans différents domaines du droit.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">💬</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Consultation en Ligne</h2>
                    <p className="text-gray-600">Posez vos questions juridiques à nos experts et recevez des réponses personnalisées.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">📝</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Documents Types</h2>
                    <p className="text-gray-600">Accédez à une bibliothèque de modèles de documents juridiques personnalisables.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">👥</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Mise en Relation</h2>
                    <p className="text-gray-600">Trouvez le professionnel du droit adapté à vos besoins parmi notre réseau d'experts.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">📱</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Suivi en Temps Réel</h2>
                    <p className="text-gray-600">Suivez l'avancement de vos démarches juridiques directement depuis notre plateforme.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">🎓</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Formation</h2>
                    <p className="text-gray-600">Participez à nos webinaires et formations pour mieux comprendre vos droits.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;