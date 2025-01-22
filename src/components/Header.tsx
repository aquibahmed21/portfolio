import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import kitecite from '../images/kitecite.svg';

const Header = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={ { width: `${scrollProgress}%` } }
        />
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800 flex items-center">
            <img
              src={ kitecite }
              alt={ "Kitecite" }
              className="w-8 h-8 mr-2 inline"
            />
            <span className="inline">Kitecite</span>
          </a>

          {/* Desktop Navigation */ }
          <div className="hidden md:flex items-center space-x-8">
            { navItems.map((item) => (
              <a
                key={ item.label }
                href={ item.href }
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                { item.label }
              </a>
            )) }
            <div className="flex items-center space-x-4">
              <a href="https://github.com/aquibahmed21" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <Github size={ 20 } />
              </a>
              <a href="https://www.linkedin.com/in/aquibahmed21/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={ 20 } />
              </a>
              <a href="mailto:aquibahmed21@gmail.com" className="text-gray-600 hover:text-blue-500">
                <Mail size={ 20 } />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */ }
          <button
            className="md:hidden text-gray-600"
            onClick={ () => setIsMenuOpen(!isMenuOpen) }
          >
            { isMenuOpen ? <X size={ 24 } /> : <Menu size={ 24 } /> }
          </button>
        </div>

        {/* Mobile Navigation */ }
        { isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            { navItems.map((item) => (
              <a
                key={ item.label }
                href={ item.href }
                className="block py-2 text-gray-600 hover:text-blue-500"
                onClick={ () => setIsMenuOpen(false) }
              >
                { item.label }
              </a>
            )) }
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://github.com/aquibahmed21" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <Github size={ 20 } />
              </a>
              <a href="https://www.linkedin.com/in/aquibahmed21/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={ 20 } />
              </a>
              <a href="mailto:aquibahmed21@gmail.com" className="text-gray-600 hover:text-blue-500">
                <Mail size={ 20 } />
              </a>
            </div>
          </div>
        ) }
      </nav>
    </header>
  );
};

export default Header;