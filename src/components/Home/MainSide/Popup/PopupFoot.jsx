import React from "react";
import * as PopupFootStyle from "./PopupPoststyle";
import { uploadData } from "../../../../data/Home";
import { db, storage } from "../../../../redux/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";

const PopupFoot = ({ setInfoPopup, showBtnPost, infoPopup, handlePopup }) => {
  const { ContainerFoot, UploadPost, ContainerIcon } = PopupFootStyle;
  const { IconUpload, IconPhoto, BtnPost, TextAny } = PopupFootStyle;
  const time = Timestamp.now().toDate().toLocaleDateString();
  const dataUser = useSelector((state) => state.data);

  const { inputText, mediaShowNow, areaShow } = infoPopup;
  const handleBtnPost = () => {
    if (showBtnPost) {
      handlePopup(false, "");
      if (areaShow === "image") {
        const storageRef = ref(storage, mediaShowNow.name);
        const uploadRef = uploadBytesResumable(storageRef, mediaShowNow);
        uploadRef.on(
          "state_changed",
          (snap) => {},
          (err) => alert(err.message),
          () => {
            getDownloadURL(uploadRef.snapshot.ref).then((url) => {
              const payload = {
                inputText,
                image: url,
                video: "",
                name: dataUser != null && dataUser.displayName,
                imgUser: dataUser != null && dataUser.photoURL,
                emailUser: dataUser != null && dataUser.email,
                likes: 0,
                time: time,
                comments: 0,
                shares: 0,
              };
              const dataBase = collection(db, `data`);
              addDoc(dataBase, payload);
            });
          }
        );
      }
    }
    if (areaShow === "video") {
      const payload = {
        inputText,
        image: "",
        video: mediaShowNow,
        name: dataUser != null && dataUser.displayName,
        imgUser: dataUser != null && dataUser.photoURL,
        emailUser: dataUser != null && dataUser.email,
        likes: 0,
        time: time,
        comments: 0,
        shares: 0,
      };
      const dataBase = collection(db, `data`);
      addDoc(dataBase, payload);
    }
    if (areaShow === "") {
      const payload = {
        inputText,
        image: "",
        video: "",
        name: dataUser != null && dataUser.displayName,
        imgUser: dataUser != null && dataUser.photoURL,
        emailUser: dataUser != null && dataUser.email,
        likes: 0,
        time: time,
        comments: 0,
        shares: 0,
      };
      const dataBase = collection(db, `data`);
      addDoc(dataBase, payload);
    }
  };

  return (
    /* Bottom PopUp Area */
    <ContainerFoot>
      <UploadPost>
        {uploadData.map((item, index) => {
          return (
            <ContainerIcon key={index}>
              <IconUpload
                onClick={
                  index === 0
                    ? () => {
                        setInfoPopup({
                          ...infoPopup,
                          mediaShowNow: "",
                          areaShow: "image",
                        });
                      }
                    : index === 1
                    ? () => {
                        setInfoPopup({
                          ...infoPopup,
                          mediaShowNow: "",
                          areaShow: "video",
                        });
                      }
                    : ""
                }
              >
                <IconPhoto src={item.img} alt="icon" />
                {item.text != undefined && <TextAny>anyone</TextAny>}
              </IconUpload>
            </ContainerIcon>
          );
        })}
      </UploadPost>
      <BtnPost onClick={() => handleBtnPost()} textInput={showBtnPost}>
        post
      </BtnPost>
    </ContainerFoot>
    /* Bottom PopUp Area */
  );
};

export default PopupFoot;
