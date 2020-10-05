const updateAuthentication = (state, action) => {
  if (state === undefined) {
    return {
      isLogin: false,
      isSubmit: false,
      // userName: {
      //   username: "user",
      // },
      userName: null,
      error: null,
    };
  }

  switch (action.type) {
    case "LOGIN":
      return {
        ...state.authentication,
        isLogin: !state.authentication.isLogin,
      };
    case "SUBMIT":
      return {
        ...state.authentication,
        isSubmit: action.payload,
      };
    case "USERNAME":
      return {
        ...state.authentication,
        userName: action.payload,
      };
    case "ERROR":
      return {
        ...state.authentication,
        error: action.payload,
      };

    default:
      return state.authentication;
  }
};
export default updateAuthentication;
