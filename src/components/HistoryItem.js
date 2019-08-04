import React from "react";
import styled from "styled-components";

const Title = styled.span``;

const Picture = styled.span`
  position: absolute;
  display: inline-flex;
  width: 180px;
  height: 180px;
  margin-top: 25px;
  margin-left: 25px;
  border-radius: 100px;
  background-color: #fff;
  transform-origin: left top;
  transform: rotate(90deg) translateY(-160px);
  margin-top: ${({ index }) => index * 20 + 40}px;
`;

const BasicHistoryItem = styled.div`
  height: 200px;
`;

const HistoryItem = ({ index }) => {
  return (
    <BasicHistoryItem>
      <Picture index={index}>
        <Title />
      </Picture>
    </BasicHistoryItem>
  );
};

export default HistoryItem;
