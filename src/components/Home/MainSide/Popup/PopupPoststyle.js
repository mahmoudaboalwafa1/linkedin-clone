import styled from "styled-components";

export const PopupContainer = styled.div`
  background-color: white;
  position: fixed;
  width: 70%;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
  border-radius: 7px;

  @media (max-width: 768px) {
    width: 80%;
  }

  & video {
    height: 264px !important;
  }
`;
export const ContentPopup = styled.div`
  padding: 20px;
`;
export const ImgUser = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
export const InfoPopup = styled.div`
  display: flex;
  align-items: center;
`;
export const NameUser = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
`;
export const WriteArea = styled.textarea`
  resize: none;
  font-size: 16px;
  margin-top: 20px;
  width: 100%;
  min-height: 70px;
  ::placeholder {
    color: var(--color-gray);
  }
`;
export const UploadPost = styled.div`
  display: flex;
`;
export const ContainerIcon = styled.div`
  margin: 0 1px;
  border-radius: 25px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--bg-hover-gray);
  }

  :nth-child(2) {
    position: relative;
  }

  :nth-child(2)::after {
    content: "";
    position: absolute;
    right: -20px;
    top: 2px;
    background-color: var(--bg-border);
    width: 1px;
    height: 65%;
  }

  :nth-child(3) {
    margin: 10px;
  }
`;
export const IconUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconPhoto = styled.img`
  cursor: pointer;
`;
export const TextAny = styled.p`
  font-size: 12px;
  margin: 0 5px;
`;
export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;

  & img {
    height: 275px;
    margin-bottom: 10px;
  }
`;
export const AreaImage = styled.form`
  text-align: center;
  font-size: 14px;
  left: 50%;
  & > input {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;
export const ImgUpload = styled.img`
  width: 100%;
  height: 100%;
`;
export const AreaVideo = styled.form`
  & input {
    width: 100%;
    height: 30px;
    font-size: 13px;
    border-radius: 6px;
    border: 1px solid #000000a3;
    padding: 1px 2px;
  }
`;
export const Video = styled.div`
  height: 268px;

  > div {
    height: 268px !important;
  }
`;
export const ContainerFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 10px;
  width: calc(100% - 40px);
`;
export const BtnPost = styled.button`
  background-color: ${({ textInput }) =>
    textInput ? "var(--color-blue)" : "rgb(235, 235, 235)"};
  color: ${({ textInput }) => (textInput ? "white" : "rgba(0, 0, 0, 0.25)")};
  font-size: 16px;
  border-radius: 30px;
  width: 74px;
  height: 35px;
  cursor: ${({ textInput }) =>
    textInput ? "pointer" : "not-allowed !important"};
  :hover {
    background-color: ${({ textInput }) =>
      textInput ? "rgb(0, 65, 130)" : ""};
  }
`;
