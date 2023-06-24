import { useNavigate } from "react-router-dom";
import { auth } from "../redux/firebase";
import { useEffect } from "react";
import { DataUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

const RequireAuth = ({ children }) => {
  const statusHome = useSelector((state) => state.statusHOme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(DataUser(user, false, true));
      if (user == undefined) {
        navigate("/", { replace: true });
      }
    });
  }, [statusHome]);
  return children;
};

export default RequireAuth;
