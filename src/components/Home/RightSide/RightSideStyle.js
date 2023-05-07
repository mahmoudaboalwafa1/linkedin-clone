import styled from "styled-components";

const RoundBox = `
background-color: var(--bg-white);
border-radius: 6px;
border: 1px solid var(--bg-border);
padding: 10px;
`;
const RightContainer = styled.div`
  flex-basis: 31%;
`;
const Feed = styled.div`
  ${RoundBox}
`;
const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FeedTitle = styled.h4`
  color: var(--color-gray);
  font-size: 18px;
  margin: 0;
`;
const FeedIcon = styled.img``;
const Hash = styled.div`
  padding: 10px;
`;
const IconHash = styled.img`
  width: 48px;
  height: 48px;
`;
const HashContainer = styled.div`
  margin-left: 10px;
`;
const WordHash = styled.p`
  font-size: 13px;
  margin: 0;
`;
const BtnHash = styled.button`
  background-color: white;
  color: var(--color-gray);
  border: 2px solid black;
  border-radius: 15px;
  padding: 6px 20px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: rgb(0 0 0 / 60%) 0px 0px 0px 1px inset;
`;
const ContainerElement = styled.div`
  display: flex;
  align-items: center;
`;
const BtnRecommendations = styled.button`
  color: var(--color-blue);
  font-size: 14px;
`;
const RightIcon = styled.img``;
const Ads = styled.div`
  margin-top: 10px;
  ${RoundBox}
`;
const ImgAds = styled.img`
  width: 100%;
`;

export {
  RightContainer,
  Feed,
  FeedContainer,
  FeedTitle,
  FeedIcon,
  Hash,
  IconHash,
  HashContainer,
  WordHash,
  BtnHash,
  ContainerElement,
  BtnRecommendations,
  RightIcon,
  Ads,
  ImgAds,
};
