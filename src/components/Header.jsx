import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative flex items-center"
            onClick={() => setActiveSection("/")}
          >
            {/* Hexagon Logo */}
            <div className="relative w-12 h-12">
              <svg 
                viewBox="0 0 100 100" 
                className={`absolute inset-0 w-full h-full ${
                  isDark 
                    ? "fill-secondary/20 stroke-secondary" 
                    : "fill-secondary/10 stroke-secondary"
                }`}
                strokeWidth="2"
              >
                <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-medium text-secondary">
                  B
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group px-4 py-2"
                onClick={() => setActiveSection(link.path)}
              >
                <span className="relative z-10 text-text-secondary group-hover:text-secondary transition-colors duration-300">
                  {link.title}
                </span>
                {activeSection === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-md bg-secondary/10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-secondary/10 transition-opacity duration-300" />
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-secondary hover:bg-secondary/10 transition-colors duration-300 ml-2"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-md text-secondary border border-secondary hover:bg-secondary/10 transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;