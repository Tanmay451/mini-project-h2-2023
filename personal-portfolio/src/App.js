// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
