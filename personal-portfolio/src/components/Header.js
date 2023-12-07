// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Tanmay Piyush Kaushik</h1>
      <p>Software Developer</p>
    </HeaderContainer>
  );
};

export default Header;
