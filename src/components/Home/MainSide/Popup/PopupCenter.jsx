import React from "react";
import * as PopupCenterStyle from "./PopupPoststyle";
import ReactPlayer from "react-player";
import { userPhoto } from "../../../../images";
import { useSelector } from "react-redux";

const PopupCenter = (props) => {
  // style
  const { InfoPopup, ImgUser, NameUser, WriteArea } = PopupCenterStyle;
  const { ContainerImg, AreaImage, AreaVideo, Video } = PopupCenterStyle;
  const dataUser = useSelector((state) => state.userReducer.data);

  const { setInfoPopup, infoPopup, inputText, areaShow, mediaShowNow } = props;
  return (
    <>
      <InfoPopup>
        {dataUser != null ? (
          <ImgUser src={dataUser.photoURL} alt={dataUser.displayName} />
        ) : (
          <ImgUser src={userPhoto} alt="user" />
        )}
        <NameUser>{dataUser.displayName}</NameUser>
      </InfoPopup>
      <WriteArea
        value={inputText}
        onChange={(e) => {
          setInfoPopup({
            ...infoPopup,
            inputText: e.target.value,
            showBtnPost: e.target.value,
          });
        }}
        placeholder="What do you want to talk about?"
      />
      {/* Center PopUp Area And Text Area And Info User*/}
      {areaShow === "image" ? (
        <ContainerImg>
          <AreaImage>
            <label htmlFor="file-image">Select an image to share</label>
            <input
              type="file"
              id="file-image"
              accept="image/*"
              onChange={(e) => {
                setInfoPopup({
                  ...infoPopup,
                  mediaShowNow: e.target.files[0],
                  showBtnPost: e.target.files[0],
                });
              }}
            />
          </AreaImage>
          {mediaShowNow != "" ? (
            <img src={URL.createObjectURL(mediaShowNow)} alt="img" />
          ) : (
            ""
          )}
        </ContainerImg>
      ) : areaShow === "video" ? (
        <>
          <AreaVideo>
            <input
              value={mediaShowNow}
              type="text"
              id="file-video"
              placeholder="please input a video link"
              onChange={(e) => {
                setInfoPopup({
                  ...infoPopup,
                  mediaShowNow: e.target.value,
                  showBtnPost: e.target.value,
                });
              }}
            />
            {mediaShowNow != "" ? (
              <Video>
                <ReactPlayer url={mediaShowNow} width="100%" />
              </Video>
            ) : (
              ""
            )}
          </AreaVideo>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PopupCenter;
