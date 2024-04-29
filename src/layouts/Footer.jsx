import React from 'react';

// Layout footer
const Footer = () => {
  return (
    <footer className="bg-gray-600 py-4">
      <div className="container mx-auto text-center text-white">
        <p className="font-bold">Test Development Integrasia Utama</p>
        <p className='font-semibold'>&copy; 2024</p>
        <div className="mt-2">
          <a href="#esa" className="text-gray-300 hover:text-white mx-2">Esa</a>
          <a href="#case" className="text-gray-300 hover:text-white mx-2">Case</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
