import React from 'react';
import styled from 'styled-components';
import './App.css';
import "font-awesome/css/font-awesome.min.css";
import TabBar from './components/TabBar';
import HomeScreen from './screens/HomeScreen';
import Container from './components/Container';
import MobileScreenContainer from './components/MobileScreenContainer';

const MediaContent = styled.div`
  flex: 1;
  background-color: #f5cd40;
`;

function App() {
  return (
    <Container>
      <MobileScreenContainer>
        <MediaContent>
          <HomeScreen />
        </MediaContent>
        <TabBar />
      </MobileScreenContainer>
    </Container>
  );
}

export default App;
