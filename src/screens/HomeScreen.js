import React from "react";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import PosterList from '../components/PosterList';
import HistoryList from '../components/HistoryList';

const posters = [
  {
    title: 'J.Fla',
    content: 'The most touching music you would like.',
    url: ''
  },
  {
    title: 'J.Fla',
    content: 'The most touching music you would like.',
    url: ''
  }
]

const hitories = [
  {
    title: 'Anne',
    url: ''
  },
  {
    title: 'Anne',
    url: ''
  }
]

const BasicHomeScreenContainer = styled.div`
  height: 100%;
`;

const Title = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 40px;
  padding-bottom: 3px;
  display: inline-flex;
  border-bottom: 4px solid #fff;
`;

const HomeScreen = () => {
  return (
    <BasicHomeScreenContainer>
      <UserInfo />
      <Title>For you</Title>
      <PosterList posters={posters}/>
      <Title>Listening History</Title>
      <HistoryList hitories={hitories}/>
    </BasicHomeScreenContainer>
  );
};

export default HomeScreen;
