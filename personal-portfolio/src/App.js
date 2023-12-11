// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Article from './components/Article';
import Experience from './components/Experience';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div>
      <div className='pageWrapper'>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Article />
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
