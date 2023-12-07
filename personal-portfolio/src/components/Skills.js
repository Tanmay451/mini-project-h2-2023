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
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        {/* Add more skills */}
      </ul>
    </SkillsContainer>
  );
};

export default Skills;
