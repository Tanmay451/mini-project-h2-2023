// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

// Import your header image
import headerImage from '../img/73e20286-048a-426d-bb6d-c8aa5cbcf5b3.JPG';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  // display: flex;
  // align-items: center;
  // justify-content: flex-start; /* Align items to the left */
`;

const HeaderImage = styled.img`
  width: 100px; /* Adjust the width as needed */
  max-width: 100%; /* Set a maximum width if desired */
  border-radius: 30%; /* Optional: Apply a border radius for a circular image */
  margin-right: 20px; /* Add margin for spacing between image and text */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={headerImage} alt="Header Image" />
      <h1>Tanmay Piyush Kaushik</h1>
      <p>Software Developer</p>
      </HeaderContainer>
  );
};

export default Header;
