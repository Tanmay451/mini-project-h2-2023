// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 40px;
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <h2>Experience</h2>
      {/* Display your projects with images, descriptions, etc. */}
      <ul>
        <li>Software Developer - GOPHERS LAB | Golang Development Services · Full-time</li>
        <li>Software Developer - Tutree, Inc.</li>
        {/* Add more skills */}
      </ul>
    </ExperienceContainer>
  );
};

export default Experience;
