import React from "react";
import styled from "styled-components";

const PopupHead = ({ handlePopup }) => {
  return (
    /* Head PopUp */
    <HeadPopup>
      <TitlePopup>Create a post</TitlePopup>
      <CloseIcon onClick={() => handlePopup(false, "")}>x</CloseIcon>
    </HeadPopup>
    /* Head PopUp */
  );
};

const HeadPopup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid var(--bg-border);
`;
const TitlePopup = styled.h2`
  font-size: 18px;
`;
const CloseIcon = styled.button`
  cursor: pointer;
  font-family: tahoma;
  font-weight: bold;
  :hover {
    color: red;
  }
`;

export default PopupHead;
