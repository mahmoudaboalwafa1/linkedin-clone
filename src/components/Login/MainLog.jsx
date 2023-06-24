import React from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { auth } from "../../redux/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { LoginMain, TitleMain } from "./loginStyle";
import Navbar from "../Header/Navbar";
import { useInputsValue } from "../../Context/Inputs";
import { useNavigate } from "react-router-dom";
import { DataUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

const MainLog = ({ dataComponent }) => {
  const navigate = useNavigate();
  const { InputsValue, setInputsValue } = useInputsValue();
  const { title } = dataComponent;
  const dispatch = useDispatch();

  const reset = () => {
    setInputsValue({
      ...InputsValue,
      email: "",
      password: "",
      confirm: "",
      error: "",
      message: "",
    });
  };

  const handleSubmit = () => {
    const { email, password, confirm } = InputsValue;
    if (title === "Sign In") {
      reset();
      if (password === confirm) {
        try {
          createUserWithEmailAndPassword(auth, email, password);
          setInputsValue({
            ...InputsValue,
            message: "We will take you to the Dashboard",
          });
          navigate("/join", { replace: true });
          reset();
        } catch (err) {
          setInputsValue({ ...InputsValue, error: err.message });
        }
      }
    } else if (title === "Join Now") {
      reset();
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          dispatch(DataUser(user));
          setInputsValue({
            ...InputsValue,
            message: "We will take you to the Dashboard",
          });
          navigate("/home", { replace: true });
          reset();
        })
        .catch((err) =>
          setInputsValue({
            ...InputsValue,
            error: err.message.slice(err.message.indexOf("(") + 1),
          })
        );
    }
  };

  return (
    <>
      <Navbar />
      <LoginMain>
        <TitleMain>{title}</TitleMain>
        <Container>
          <Form>
            {title === "Join Now" && InputsValue.name === "user" ? (
              <>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  id="name"
                  onChange={(e) =>
                    setInputsValue({
                      ...InputsValue,
                      name: e.target.value,
                    })
                  }
                />
              </>
            ) : (
              ""
            )}

            <Form.Label htmlFor="email">email</Form.Label>
            <Form.Control
              onChange={(e) =>
                setInputsValue({
                  ...InputsValue,
                  email: e.target.value,
                })
              }
              id="email"
              name="email"
              type="email"
            />
            {title === "Reset A Password" ? (
              ""
            ) : (
              <>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setInputsValue({ ...InputsValue, password: e.target.value })
                  }
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="false"
                />
              </>
            )}

            {title === "Sign In" ? (
              <>
                <Form.Label htmlFor="confirm">Confirm Password</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setInputsValue({ ...InputsValue, confirm: e.target.value })
                  }
                  id="confirm"
                  type="password"
                  name="confirm"
                  autoComplete="false"
                />
              </>
            ) : (
              ""
            )}
            <div>
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
          </Form>
          {InputsValue.message && (
            <Alert variant="success">{InputsValue.message}</Alert>
          )}
          {InputsValue.error && (
            <Alert variant="danger">
              {InputsValue.error.slice(InputsValue.error.indexOf("(") + 1, -2)}
            </Alert>
          )}
        </Container>
      </LoginMain>
    </>
  );
};

export default MainLog;
