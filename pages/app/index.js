import React from 'react';
import Menu from '../components/menu';

function Main() {
  return (
    <div id="corpo" className="w-full h-screen flex">
      <Menu />
      
      <div className="flex-grow p-8 bg-gray-100 overflow-y-auto">
        {/* Seção 1: Título */}
        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Welcome to the React Project</h1>
          <p className="text-lg text-center text-gray-600">
            Let's build something amazing together!
          </p>
        </section>

        {/* Seção 2: Lorem Ipsum */}
        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Section 2</h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        {/* Seção 3: Lorem Ipsum */}
        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Section 3</h2>
          <p className="text-lg text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Seção 4: Lorem Ipsum */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Section 4</h2>
          <p className="text-lg text-gray-600">
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Main;
