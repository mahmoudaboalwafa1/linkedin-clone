import React, { useEffect, useState } from "react";
import * as contentStyle from "./MainSideStyle";
import { collection, onSnapshot } from "firebase/firestore";
import * as ImagesContent from "../../../images/index";
import { auth, db } from "../../../redux/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ReactPlayer from "react-player";
import AreaPutData from "../../../data/Home";

const ContentArticles = () => {
  const [articles, setArticles] = useState([]);
  const [Google, setGoogle] = useState(null);
  const { ArticleContainer, ImgArticle, ImgPost, NoArticles } = contentStyle;
  const { PostContainer, PostText, NameUser, EmailUser } = contentStyle;
  const { TextArticle, Likes, Time, CountLikes, ContainerLikes, Ellipsis } =
    contentStyle;
  const { TextLikes, Comments, Shares, AreaPut, Put, ContainerElementsPost } =
    contentStyle;
  const { ellipsis, likeBlue, loveIcon, likeIcon } = ImagesContent;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setGoogle(user);
    });

    onSnapshot(collection(db, "data"), (arts) => {
      const dbData = arts.docs.map((art) => [...articles, art.data(), art.id]);
      setArticles(dbData);
    });
  }, [Google]);

  return articles.length > 0 && Google != null ? (
    articles.map((art, index) => (
      <ArticleContainer key={index}>
        <PostContainer>
          <ContainerElementsPost>
            <ImgPost src={art[0].imgUser} />
            <PostText>
              <NameUser>{art[0].name}</NameUser>
              <EmailUser>{art[0].emailUser}</EmailUser>
              <Time>{art[0].time}</Time>
            </PostText>
          </ContainerElementsPost>
          <Ellipsis src={ellipsis} alt="elipsis" />
        </PostContainer>
        <TextArticle>{art[0].inputText}</TextArticle>
        {art[0].image != "" ? (
          <ImgArticle src={art[0].image} alt="post-image" />
        ) : art[0].video != "" ? (
          <ReactPlayer width="100%" url={art[0].video} />
        ) : (
          ""
        )}
        <Likes>
          <ContainerLikes>
            <img src={likeBlue} alt="like" />
            <img src={loveIcon} alt="love" />
            <CountLikes>{art[0].likes}</CountLikes>
          </ContainerLikes>
          <TextLikes>
            <Comments>{art[0].comments} comments</Comments>
            <Shares>{art[0].shares} share</Shares>
          </TextLikes>
        </Likes>
        <AreaPut>
          {AreaPutData.map((put, index) => {
            return (
              <Put key={index}>
                <img src={put.img} alt={put.text} />
                <li>{put.text}</li>
              </Put>
            );
          })}
        </AreaPut>
      </ArticleContainer>
    ))
  ) : articles.length === 0 ? (
    <NoArticles>No Articles Now</NoArticles>
  ) : (
    ""
  );
};

export default ContentArticles;
