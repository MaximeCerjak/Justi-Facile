import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SkipLink from './components/SkipLink';
import Home from './components/Home';
import Services from "./Services.tsx";
import Modal from "./components/Modal.tsx";
import ContactForm from "./components/ContactForm.tsx";

const App = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <SkipLink />
        
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <nav className="w-full px-4" role="navigation">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-8">
                <Link to="/">
                  <img
                      src="/justi_logo.png"
                      alt="JustiFacile - Accompagnement juridique simplifié"
                      className="h-12 w-auto"
                  />
                </Link>
                <ul className="flex space-x-6">
                  <li>
                    <Link to="/" className="text-gray-700 hover:text-sky-700 transition-colors">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-700 hover:text-sky-700 transition-colors">Services</Link>
                  </li>
                </ul>
              </div>
              <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-sky-600 text-white hover:bg-sky-700 px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              >
                Nous contacter
              </button>
            </div>
          </nav>
        </header>

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </main>

        <footer className="bg-sky-100 text-white mt-16">
          <div className="w-full px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">À propos</h3>
                <p className="text-gray-700">JustiFacile rend le droit accessible à tous en simplifiant l'information juridique.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Liens rapides</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-700 hover:text-sky-700 transition-colors">Mentions légales</Link></li>
                  <li><Link to="/" className="text-gray-700 hover:text-sky-700 transition-colors">Politique de confidentialité</Link></li>
                  <li><Link to="/" className="text-gray-700 hover:text-sky-700 transition-colors">Plan du site</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact</h3>
                <p className="text-gray-700">Une question ? N'hésitez pas à nous contacter.</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                  className="mt-4 bg-sky-600 text-white hover:bg-sky-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Nous contacter
                </button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-sky-200">
              <p className="text-center text-gray-700">
                © 2024 JustiFacile - Le droit, en version simple
              </p>
            </div>
          </div>
        </footer>
        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Nous contacter"
        >
          <ContactForm />
        </Modal>
      </div>
    </Router>
  );
};

export default App; 
