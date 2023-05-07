import React from "react";
import { cardBg, widgetIcon, itemIcon, plusIcon } from "../../../images/index";
import { Card } from "react-bootstrap";
import * as LeftStyle from "./LeftSideStyle";
import * as LeftData from "../../../data/LeftSide";
import { useInputsValue } from "../../../Context/Inputs";

const LeftSide = () => {
  // Element Style
  const { DiscoverMore, DiscoverTitle, Events, EventsContainer } = LeftStyle;
  const { GroupTitle, Groups, GroupsText, HashTags, IconPlus } = LeftStyle;
  const { ItemIcon, ItemTitle, Items, ItemsFoot, ItemsText } = LeftStyle;
  const { LeftContainer, TextNetwork, TitleConnections, WidgetIcon } =
    LeftStyle;

  // Data
  const { connection, discoverText, eventsText, groupText } = LeftData;
  const { hashText, textItems, textNetwork, textPhoto, wellcome } = LeftData;

  const { InputsValue, setInputsValue } = useInputsValue();

  return (
    <LeftContainer>
      <Card>
        <Card.Img src={cardBg} alt="card background" />
        <div className="photo"></div>
        <Card.Title>{wellcome}user</Card.Title>
        <label htmlFor="photo">
          <p>{textPhoto}</p>
          <input
            id="photo"
            onChange={(e) =>
              setInputsValue({ ...InputsValue, imgUpload: e.target.files[0] })
            }
            type="file"
            accept="image/*"
          />
        </label>
        <Items>
          <ItemsText>
            <TitleConnections>{connection}</TitleConnections>
            <TextNetwork>{textNetwork}</TextNetwork>
          </ItemsText>
          <WidgetIcon src={widgetIcon} alt="widget-icon" />
        </Items>
        <ItemsFoot>
          <ItemIcon src={itemIcon} alt="item-icon" />
          <ItemTitle>{textItems}</ItemTitle>
        </ItemsFoot>
      </Card>
      <Groups>
        <GroupTitle>{groupText}</GroupTitle>
        <EventsContainer>
          <GroupsText>
            <Events>{eventsText}</Events>
            <HashTags>{hashText}</HashTags>
          </GroupsText>
          <IconPlus src={plusIcon} alt="plus-icon" />
        </EventsContainer>
      </Groups>
      <DiscoverMore>
        <DiscoverTitle>{discoverText}</DiscoverTitle>
      </DiscoverMore>
    </LeftContainer>
  );
};

export default LeftSide;
