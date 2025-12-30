import { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-yellow-400 p-2 rounded-lg">
              <HardHat className="w-8 h-8 text-gray-900" />
            </div>
            <span className="text-2xl font-bold text-white">BuildPro</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-lg font-medium transition-colors duration-200 ${
                  activePage === item.id
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => onNavigate('contact')}
            className="hidden md:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
          >
            Get a Quote
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left text-lg font-medium transition-colors duration-200 ${
                  activePage === item.id
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="w-full bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
