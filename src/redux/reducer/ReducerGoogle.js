import { DATA_USER } from "../actions";

const initialState = { data: null, statusLogin: true, statusHome: false };

const ReducerGoogle = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USER:
      return {
        data: action.payload,
        statusLogin: action.statusLogin,
        statusHome: action.statusHome,
      };
  }
  return state;
};

export default ReducerGoogle;
