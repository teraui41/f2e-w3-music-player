import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const TabName = styled.p`
  font-size: 14px;
  margin: 2px;
`

const BasicTabBar = ({ className }) => {
  return (
    <div className={className}>
      <span>
        <Icon icon="home" />
        <TabName>HOME</TabName>
      </span>
      <span>
        <Icon icon="search" />
        <TabName>HOME</TabName>
      </span>
      <span>
        <Icon icon="list" />
        <TabName>HOME</TabName>
      </span>
    </div>
  );
};

const TabBar = styled(BasicTabBar)`
  height: 70px;
  position: absolute;
  background-color: #f6de6d;
  bottom: 0px;
  width: 100%;
  text-align: center;
  & span {
    padding: 6px 15px;
    font-size: 32px;
    display: inline-block;
    color: #fff;
  }
`;

export default TabBar;
