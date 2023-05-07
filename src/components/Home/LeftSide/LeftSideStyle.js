import photoCamera from "../../../images/photo.svg";
import styled from "styled-components";

const commonBox = `
background-color: var(--bg-white);
border: 1px solid var(--bg-border);
`;
const LeftContainer = styled.div`
  flex-basis: 24%;
  text-align: center;

  & img.card-img {
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  & .card-title {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.9);
    font-wieght: 600;
  }

  .card-img {
    height: 54px;
  }

  .photo {
    width: 72px;
    height: 72px;
    margin: -40px auto 0 auto;
    background-image: url(${photoCamera});
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: solid 1px var(--bg-white);
    border-radius: 50%;
  }

  & label > p {
    cursor: pointer;
    margin: auto;
    color: rgb(10, 102, 194);
    font-size: 12px;
  }

  & input {
    width: 100px;
    cursor: pointer;
    opacity: 0;
  }
`;

const Items = styled.div`
  margin-top: -25px;
  border-top: 1px solid var(--bg-border);
  border-bottom: 1px solid var(--bg-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 0;
  position: relative;
  z-index: 99;
  :hover::after {
    display: block;
  }

  &::after {
    content: "";
    background-color: var(--bg-hover-gray);
    width: 100%;
    height: 45px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    display: none;
  }
`;

const ItemsText = styled.div`
  text-align: left;
  font-size: 12px;
`;

const TitleConnections = styled.h5`
  color: var(--color-gray);
  font-weight: bold;
  font-size: 12px;
  line-height: 0.5;
`;

const TextNetwork = styled.p`
  line-height: 0.5;
  font-weight: bold;
`;
const WidgetIcon = styled.img`
  transform: translateY(-10px);
  cursor: pointer;
`;
const ItemsFoot = styled.div`
  display: flex;
  padding: 5px 10px;
  padding-bottom: 0px;
  align-items: center;
  :hover {
    background-color: var(--bg-hover-gray);
  }
`;
const ItemIcon = styled.img`
  cursor: pointer;
`;
const ItemTitle = styled.h5`
  font-size: 12px;
  padding-top: 13px;
  font-weight: bold;
`;

// Component Groups
const Groups = styled.div`
  ${commonBox}
  margin-top: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  text-align: left;
  font-size: 12px;
  position: relative;
`;
const GroupTitle = styled.h5`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  :hover {
    color: var(--color-blue);
  }
  padding: 10px;
  padding-bottom: 0;
`;
const GroupsText = styled.div``;
const EventsContainer = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-between;
  font-weight: bold;
  padding: 10px;
  margin: 0;
  & li:hover {
    color: var(--color-blue);
  }
`;
const Events = styled.li``;
const HashTags = styled.li``;
const IconPlus = styled.img``;

// Component Discover
const DiscoverMore = styled.div`
  ${commonBox}
  text-align: left;
  padding: 10px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 0;
  position: relative;
  z-index: 2;

  &:hover::before {
    display: block;
  }

   ::before {
    content: "";
    background-color: var(--bg-hover-gray);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    z-index: -1;
    display: none;
  }


}
`;
const DiscoverTitle = styled.h5`
  font-size: 12px;
  color: var(--color-gray);
  margin: 0;
`;

export {
  LeftContainer,
  Items,
  ItemsText,
  TitleConnections,
  TextNetwork,
  WidgetIcon,
  ItemsFoot,
  ItemIcon,
  ItemTitle,
  Groups,
  GroupTitle,
  GroupsText,
  EventsContainer,
  Events,
  HashTags,
  IconPlus,
  DiscoverMore,
  DiscoverTitle,
};
