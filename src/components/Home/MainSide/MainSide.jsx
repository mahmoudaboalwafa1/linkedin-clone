import React from "react";
import { useSelector } from "react-redux";
import { userPhoto } from "../../../images";
import * as MainSideStyle from "./MainSideStyle";
import { category } from "../../../data/Home";
import { Fragment } from "react";
import PopupPost from "./Popup/PopupPost";
import { useState } from "react";
import ContentArticles from "./ContentArticles";

const MainSide = () => {
  const dataUser = useSelector((state) => state.data);
  const [popUp, setPopup] = useState(false);
  const [overlay, setOverlay] = useState("");

  const [infoPopup, setInfoPopup] = useState({
    inputText: "",
    mediaShowNow: "",
    areaShow: "",
    showBtnPost: false,
  });
  const handleOverlay = (className) => {
    setOverlay(className);
  };

  const handlePopup = (status, overClass) => {
    setPopup(status);
    setOverlay(overClass);
    setInfoPopup({
      ...infoPopup,
      inputText: "",
      mediaShowNow: "",
      areaShow: "",
      showBtnPost: "",
    });
  };

  const {
    Main,
    ShareBox,
    Form,
    ImgUser,
    BtnPost,
    Category,
    CateItem,
    ImgCate,
    TextCate,
  } = MainSideStyle;

  return (
    <Main>
      <ShareBox>
        <Form>
          {dataUser != null ? (
            <ImgUser src={dataUser.photoURL} alt={dataUser.displayName} />
          ) : (
            <ImgUser src={userPhoto} alt="user-photo" />
          )}
          <BtnPost onClick={() => handlePopup(true, "overlay")}>
            Start a post
          </BtnPost>
        </Form>
        <Category>
          {category.map((cate, index) => {
            return (
              <Fragment key={index}>
                <CateItem>
                  <ImgCate src={cate.icon} alt={cate.text} />
                  <TextCate>{cate.text}</TextCate>
                </CateItem>
              </Fragment>
            );
          })}
        </Category>
      </ShareBox>
      <PopupPost
        popUp={popUp}
        handlePopup={handlePopup}
        handleOverlay={handleOverlay}
        overlay={overlay}
        infoPopup={infoPopup}
        setInfoPopup={setInfoPopup}
      />
      <ContentArticles />
    </Main>
  );
};

export default MainSide;
