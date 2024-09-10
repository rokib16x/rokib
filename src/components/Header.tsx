import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed w-full bg-opacity-90 backdrop-blur-sm z-40 bg-gray-900">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-end space-x-4">
          {[
            { name: 'Home', icon: FaHome },
            { name: 'About', icon: FaUser },
            { name: 'Skills', icon: FaCode },
            { name: 'Projects', icon: FaProjectDiagram },
            { name: 'Contact', icon: FaEnvelope },
          ].map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className="text-teal-300 hover:text-teal-100 transition duration-300 flex items-center"
              >
                <item.icon className="mr-2" />
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;