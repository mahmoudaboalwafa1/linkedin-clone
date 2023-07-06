import styled from "styled-components";

const Main = styled.main`
  flex-basis: 49%;
  flex: 1;
  margin: 0 20px;

  @media (max-width: 1090px) {
    margin: 10px 0;
  }
`;
const ShareBox = styled.div`
  width: 100%;
  background-color: var(--bg-white);
  border-radius: 6px;
  border: 1px solid var(--bg-border);
  padding: 10px;
`;
const Form = styled.form`
  display: flex;
`;
const ImgUser = styled.img`
  border-radius: 50%;
  width: 48px;
`;
const BtnPost = styled.div`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 25px;
  width: 100%;
  margin-left: 10px;
  font-size: 14px;
  padding-left: 10px;

  &:hover {
    background-color: var(--bg-hover-gray);
  }
`;
const Category = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-top: 17px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const CateItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  padding: 10px;

  &:hover {
    background-color: var(--bg-hover-gray);
  }
`;
const ImgCate = styled.img`
  margin-right: 5px;
`;
const TextCate = styled.p`
  color: var(--color-blue);
  font-size: 14px;
  margin: 0;
`;

// Article Content Style
const ArticleContainer = styled.div`
  background-color: var(--bg-white);
  margin-top: 10px;
  border: solid 1px var(--bg-border);
  border-radius: 6px;
`;
const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const ContainerElementsPost = styled.div`
  display: flex;
`;
const ImgPost = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const PostText = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 5px;
`;
const NameUser = styled.li`
  font-size: 14px;
`;
const EmailUser = styled.li`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;
const Time = styled.li`
  direction: rtl;
  margin: 0;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
`;
const NoArticles = styled.p`
  text-align: center;
  margin-top: 10px;
`;
const TextArticle = styled.p`
  margin: 0;
  padding: 10px;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
`;
const ImgArticle = styled.img`
  width: 100%;
  height: 400px;
`;
const Likes = styled.div`
  padding: 10px;
  display: flex;
  width: 95%;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background-color: var(--bg-border);
    width: 100%;
    height: 1px;
    left: 52%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;
const CountLikes = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;
const ContainerLikes = styled.div`
  display: flex;
`;
const Ellipsis = styled.img`
  @media (max-width: 500px) {
    display: none;
  }
`;
const TextLikes = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  margin-left: 20px;
`;
const Comments = styled.li`
  font-size: 14px;
  margin-right: 5px;
`;
const Shares = styled.li`
  font-size: 14px;
`;
const AreaPut = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin: 0 5px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
const Put = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;

  li {
    color: #00000099;
    font-size: 13px;
    margin-left: 5px;
  }
`;

export {
  Main,
  ShareBox,
  Form,
  ImgUser,
  BtnPost,
  Category,
  CateItem,
  ImgCate,
  TextCate,
  ArticleContainer,
  NoArticles,
  PostContainer,
  ContainerElementsPost,
  ImgPost,
  NameUser,
  PostText,
  EmailUser,
  Time,
  TextArticle,
  ImgArticle,
  Likes,
  Ellipsis,
  CountLikes,
  ContainerLikes,
  TextLikes,
  Comments,
  Shares,
  AreaPut,
  Put,
};
