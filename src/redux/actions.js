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

const GET_DOWNLOAD = "GET_DOWNLOAD";

// Set Download
const GetDownload = (payload) => {
  return {
    type: GET_DOWNLOAD,
    download: payload,
  };
};

export { DataUser, DATA_USER, GET_DOWNLOAD, GetDownload };
