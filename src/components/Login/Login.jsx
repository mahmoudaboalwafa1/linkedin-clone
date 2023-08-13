import React, { useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { GoogleProvider, auth } from "../../redux/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginHero, LogoGoogle } from "../../images/index";
import { DataUser } from "../../redux/actions";
import * as LoginStyle from "./loginStyle";
import Navbar from "../Header/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const statusLogin = useSelector((state) => state.statusLogin);
  const signWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((user) => {
        dispatch(DataUser(user));
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (statusLogin) {
        dispatch(DataUser(user, false, true));
        navigate("/home", { replace: true });
      }
    });
  }, [statusLogin]);

  // Style
  const { Landing, Container, Hero, ContainerLand, Google } = LoginStyle;

  return (
    <>
      <Navbar />
      <Landing>
        <Container>
          <Hero>welcome to your professional community</Hero>
        </Container>
        <ContainerLand>
          <Google href="#" onClick={() => signWithGoogle()}>
            <img src={LogoGoogle} />
            <span>sign in with google</span>
          </Google>
          <img src={loginHero} />
        </ContainerLand>
      </Landing>
    </>
  );
};

export default Login;
