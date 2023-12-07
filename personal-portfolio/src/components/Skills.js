// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 40px;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <ul>
        <li>Systems Design</li>
        <li>Distributed Systems</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>Go (Programming Language)</li>
        <li>Database Management System (DBMS)</li>
        <li>Java</li>
        <li>Machine Learning</li>
        <li>Python (Programming Language)</li>
        {/* Add more skills */}
      </ul>
    </SkillsContainer>
  );
};

export default Skills;
