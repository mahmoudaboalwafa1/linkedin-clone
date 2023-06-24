// Action Fetch From Google
const DATA_USER = "DATA_USER";

const DataUser = (user, stateLogin, stateHome) => {
  return {
    type: DATA_USER,
    payload: user,
    statusLogin: stateLogin,
    statusHome: stateHome,
  };
};

export { DataUser, DATA_USER };
