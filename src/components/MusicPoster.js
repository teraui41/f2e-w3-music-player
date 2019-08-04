import React from "react";
import styled from "styled-components";

const BasicMusicPosterContainer = styled.div`
  margin-left: 20px;
  height: 220px;
  position: absolute;
  width: 220px;
  border-radius: 10px;
  display: inline-block;
  transform: rotate(90deg) translateY(-350px);
  transform-origin: left top;
  margin-top: ${({index}) => index * 250 + 40 }px;
`;

const Poster = styled.div`
  height: 370px;
  width: 220px;
  border-radius: 10px;
  background-color: #ddd;
  overflow: hidden;
  display: inline-block;
`;

const Mask = styled.div`
  background-image: linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0.3));
  height: 100%;
  position: relative;
  padding-top: 10%;
`;

const PosterTitle = styled.span`
  color: #333;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
`;

const PosterContent = styled.p`
  color: #333;
  margin: 0px;
  padding: 0px 10px;
  display: inline-flex;
`;

const MusicPoster = ({ poster, index }) => {
  const { title, content, url } = poster;

  return (
    <BasicMusicPosterContainer url={url} index={index}>
      <Poster>
        <Mask>
          <PosterTitle>{title}</PosterTitle>
          <PosterContent>{content}</PosterContent>
        </Mask>
      </Poster>
    </BasicMusicPosterContainer>
  );
};

export default MusicPoster;
