import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';

const Layout = ({updateDa, da}) => {
  return (
    <LayoutWrapper>
        <GlobalStyle/>
        <Navbar/>
    </LayoutWrapper>
  )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;

const LayoutWrapper = styled.div`
  max-height: 100vh;
  width: 100%;
  background-color: white;
//   background-image: ${(props) => props.theme.navImage};
  color: black;
`;

export default Layout;