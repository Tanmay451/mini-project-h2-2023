// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.section`
  padding: 40px;
`;

const Article = () => {
  return (
    <ArticleContainer>
      <h2>Article</h2>
      <ul>
        <li><a href="https://www.linkedin.com/pulse/why-system-design-critical-software-developers-guide-piyush-kaushik/" rel="noreferrer">Why System Design is Critical for Software Developers: A Guide for Those with One Year of Experience in the IT Industry</a></li>
        <li><a href="https://www.linkedin.com/pulse/understanding-importance-system-design-ai-software-piyush-kaushik/" rel="noreferrer">Understanding the Importance of System Design and AI in Software Engineering</a></li>
        <li><a href="https://www.linkedin.com/pulse/using-maps-improve-algorithm-efficiency-tanmay-piyush-kaushik/" rel="noreferrer">Using Maps to Improve Algorithm Efficiency</a></li>
        <li><a href="https://gopherslab.com/insights/gorilla-mux-middleware-in-go/" rel="noreferrer">Gorilla Mux Middleware in Go</a></li>
        {/* Add more skills */}
      </ul>
    </ArticleContainer>
  );
};

export default Article;
