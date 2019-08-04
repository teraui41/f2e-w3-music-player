import React from "react";
import styled from "styled-components";
import MusicPoster from "./MusicPoster";

const StyledPosterList = styled.div`
  position: relative;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 20px;
  transform: rotate(-90deg) translateY(-99%);
  transform-origin: right top;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PosterList = ({ posters }) => {
  return (
    <StyledPosterList>
      {posters.map((poster, index) => (
        <MusicPoster poster={poster} index={index} />
      ))}
    </StyledPosterList>
  );
};

export default PosterList;
