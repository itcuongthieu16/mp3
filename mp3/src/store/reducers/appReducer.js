// appReducer: Lưu những cái state, biến có giá trị thông tin của app(VD: màu sắc, ....)

import actionTypes from "../actions/actionTypes";

const initState = {
  homeData: [],
  test: "Hello 123",
}; // Gia tri khoi tao ban dau

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;

    default:
      return state;
  }
};

export default appReducer;
