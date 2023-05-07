import React from "react";
import * as Popup from "./PopupPoststyle";
import PopupHead from "./PopupHead";
import PopupFoot from "./PopupFoot";
import PopupCenter from "./PopupCenter";

const PopupPost = (props) => {
  const { popUp, handlePopup, overlay, infoPopup, setInfoPopup } = props;

  return (
    <>
      <div className={overlay}></div>
      {popUp && (
        <Popup.PopupContainer>
          <PopupHead handlePopup={handlePopup} />

          {/* Center PopUp Area And Text Area And Info User*/}
          <Popup.ContentPopup>
            <PopupCenter
              setInfoPopup={setInfoPopup}
              infoPopup={infoPopup}
              {...infoPopup}
            />
            <PopupFoot
              setInfoPopup={setInfoPopup}
              {...infoPopup}
              infoPopup={infoPopup}
              handlePopup={handlePopup}
            />
          </Popup.ContentPopup>
        </Popup.PopupContainer>
      )}
    </>
  );
};

export default PopupPost;
