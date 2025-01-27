import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaChevronDown, FaChevronUp, FaStar, FaBell, FaHeart } from 'react-icons/fa';

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { name: 'Home', link: '/', icon: <FaHome /> },
    { name: 'About', link: '/about', icon: <FaInfoCircle /> },
    { name: 'Contact', link: '/contact', icon: <FaEnvelope /> },
    {
      name: 'Categorias',
      icon: expanded ? <FaChevronUp /> : <FaChevronDown />,
      subcategories: [
        { name: 'Categoria 1', link: '/categoria-1', icon: <FaStar /> },
        { name: 'Categoria 2', link: '/categoria-2', icon: <FaBell /> },
        { name: 'Categoria 3', link: '/categoria-3', icon: <FaHeart /> },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md w-64 h-full p-4">
      {/* Título do Sistema */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-500">Nome</h1>
      </div>
      
      {/* Menu */}
      <ul className="flex flex-col space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex flex-col">
            {/* Item principal */}
            <div
              className="flex items-center space-x-3 cursor-pointer rounded-lg p-2 hover:bg-blue-100 transition-all duration-300"
              onClick={() => {
                if (item.subcategories) {
                  setExpanded(!expanded); // Alterna o estado de expansão
                }
              }}
            >
              <span className="text-blue-500">{item.icon}</span>
              <span className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                {item.name}
              </span>
            </div>

            {/* Subcategorias (apenas se expandido) */}
            {item.subcategories && expanded && (
              <ul className="ml-8 mt-2 space-y-2">
                {item.subcategories.map((subcategory, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center space-x-3 rounded-lg p-2 hover:bg-gray-200 transition-all duration-300"
                  >
                    <span className="text-gray-600">{subcategory.icon}</span>
                    <a
                      href={subcategory.link}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      {subcategory.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
