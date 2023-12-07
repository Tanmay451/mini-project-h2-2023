// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
