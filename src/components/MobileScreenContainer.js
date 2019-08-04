import styled from "styled-components";

const MobileScreenContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  width: calc(90vh / 19.5 * 9);
  height: 90vh;
  background-color: #f5cd40;
  border: 20px solid #fff;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
  &::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0;
    right: 0;
    height: 4vh;
    width: calc(90vh / 19.5 * 9 / 3 * 1.8);
    margin: auto;
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export default MobileScreenContainer;
