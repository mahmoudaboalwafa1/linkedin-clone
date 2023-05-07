import React, { useEffect, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, storage } from "../../redux/firebase";
import { userPhoto, workImg } from "../../images/index";
import dataNav from "../../data/Header";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { DataUser } from "../../redux/actions";
import { useInputsValue } from "../../Context/Inputs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const IconsHeader = () => {
  const [showSingOut, setShowSignOut] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { InputsValue } = useInputsValue();

  const signOutUser = () => {
    signOut(auth).then((_) => {
      dispatch(DataUser(null, false));
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo);

      if (userInfo) {
        updateProfile(userInfo, {
          displayName: InputsValue.name,
        });
        if (InputsValue.imgUpload) {
          const storageRef = ref(storage, InputsValue.imgUpload.name);
          const uploadRef = uploadBytesResumable(
            storageRef,
            InputsValue.imgUpload
          );
          uploadRef.on(
            "state_changed",
            (snap) => {},
            (err) => useInputsValue({ ...InputsValue, error: err }),
            () => {
              getDownloadURL(uploadRef.snapshot.ref).then((url) => {
                updateProfile(userInfo, {
                  photoURL: url,
                });
                dispatch(DataUser(userInfo));
              });
            }
          );
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [InputsValue]);

  return (
    <>
      {dataNav.map((item, index) => {
        const { src, alt, link } = item;
        return (
          <NavLink to={link.toLowerCase()} key={index}>
            <img src={src} alt={alt} />
            <li>{link}</li>
          </NavLink>
        );
      })}

      <NavLink>
        {user ? (
          <img src={user.photoURL} alt={user.displayName} className="user" />
        ) : (
          <img src={userPhoto} alt="user-photo" className="user" />
        )}
        <li onClick={() => setShowSignOut(!showSingOut)}>
          Me <RiArrowDownSFill />
          <button onClick={signOutUser} className={showSingOut ? "show" : ""}>
            Sign Out
          </button>
        </li>
      </NavLink>
      <NavLink>
        <img src={workImg} alt="user-photo" className="apps-logo" />
        <li>
          Work <RiArrowDownSFill />
        </li>
      </NavLink>
    </>
  );
};

export default IconsHeader;
