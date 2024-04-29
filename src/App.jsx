import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
