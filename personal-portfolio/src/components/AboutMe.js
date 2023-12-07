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
      <p>I am a software developer with over 2 year of experience in both product-based and consulting/agency environments. 
        I have a strong background in optimizing data pipelines and developing new features for a job portal project. 
        I am currently working at Gopherslab, where I am part of the core team for a client, 
        Viki [https://www.linkedin.com/company/viki/]. My goal is to continue to grow my skills and take on new challenges in
         the field of software development.</p>
    </AboutMeContainer>
  );
};

export default AboutMe;
