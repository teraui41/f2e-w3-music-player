import React from "react";
import styled from "styled-components";

const UserName = styled.span`
  font-size: 24px;
  color: #fff;
  padding: 14px 40px;
  display: inline-flex;
  font-weight: bold;
  vertical-align: middle;
`;

const Avatar = styled.span`
  right: 40px;
  width: 50px;
  height: 50px;
  position: absolute;
  display: inline-flex;
  border-radius: 100px;
  vertical-align: middle;
  background-size: contain;
  background-image: url(./images/avatar.jpg);
`;

const BasicUserInfo = styled.div`
  flex: 1;
  width: 100%;
  height: 70px;
`;

const UserInfo = () => {
  return (
    <BasicUserInfo>
      <UserName>Edmond.Wu</UserName>
      <Avatar />
    </BasicUserInfo>
  );
};

export default UserInfo;
