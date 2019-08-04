import React from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";

const BasicHistoryList = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 20px;
  width: 220px;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg) translateY(-59%);
  transform-origin: right top;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HistoryList = ({ hitories }) => {
  return (
    <BasicHistoryList>
      {hitories.map((history, index) => (
        <HistoryItem history={history} index={index}/>
      ))}
    </BasicHistoryList>
  );
};

export default HistoryList;
