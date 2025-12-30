import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={setActivePage} />;
      case 'services':
        return <ServicesPage onNavigate={setActivePage} />;
      case 'projects':
        return <ProjectsPage onNavigate={setActivePage} />;
      case 'about':
        return <AboutPage onNavigate={setActivePage} />;
      case 'contact':
        return <ContactPage onNavigate={setActivePage} />;
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;
