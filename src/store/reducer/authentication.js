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
      token: null,
      name: null,
    };
  }

  switch (action.type) {
    case "LOGIN":
      return {
        ...state.authentication,
        isLogin: action.payload,
      };
    case "SUBMIT":
      return {
        ...state.authentication,
        isSubmit: action.payload,
      };
    case "TOKEN":
      return {
        ...state.authentication,
        token: action.payload,
      };
    case "NAME":
      return {
        ...state.authentication,
        name: action.payload,
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
