// src/components/AboutMe.js
import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.section`
  padding: 40px;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>About Me</h2>
      <p>Your introduction and description go here.</p>
    </AboutMeContainer>
  );
};

export default AboutMe;
