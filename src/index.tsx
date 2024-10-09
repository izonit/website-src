import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/pages/About';
import Contacts from '@/pages/Contacts';
import Home from '@/pages/Home';

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