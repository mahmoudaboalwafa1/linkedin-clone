import React from "react";
import * as RightSideStyle from "./RightSideStyle";
import { btnView, feedItems, feedTitle } from "../../../data/RightSide";
import { feedIcon, rightIcon, bannerImg } from "../../../images";

const RightSide = () => {
  const { RightContainer, Feed, FeedContainer, FeedTitle } = RightSideStyle;
  const { FeedIcon, Hash, IconHash, HashContainer } = RightSideStyle;
  const { BtnHash, ContainerElement, WordHash } = RightSideStyle;
  const { BtnRecommendations, RightIcon, Ads, ImgAds } = RightSideStyle;

  return (
    <RightContainer>
      <Feed as="div">
        <FeedContainer>
          <FeedTitle>{feedTitle}</FeedTitle>
          <FeedIcon src={feedIcon} alt="feed Icon" />
        </FeedContainer>
        <Hash>
          {feedItems.map((item, index) => {
            const { icon, text, btn } = item;
            return (
              <ContainerElement key={index}>
                <IconHash src={icon} alt="hash-icon" />
                <HashContainer>
                  <WordHash>{text}</WordHash>
                  <BtnHash>{btn}</BtnHash>
                </HashContainer>
              </ContainerElement>
            );
          })}
          <BtnRecommendations>
            {btnView}
            <RightIcon src={rightIcon} alt="right-icon" />
          </BtnRecommendations>
        </Hash>
      </Feed>
      <Ads>
        <ImgAds src={bannerImg} alt="Ads-icon" />
      </Ads>
    </RightContainer>
  );
};

export default RightSide;
