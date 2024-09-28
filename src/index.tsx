import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contacts from '@/pages/Contacts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '@/styles/style.css';

/**
 * This component is the main application component and is the root of the component tree.
 */
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);