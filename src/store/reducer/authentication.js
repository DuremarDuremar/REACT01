const updateAuthentication = (state, action) => {
  if (state === undefined) {
    return {
      isLogin: false,
      isSubmit: false,
    };
  }

  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: !state.authentication.isLogin,
      };
    case "SUBMIT":
      return {
        isSubmit: action.payload,
      };

    default:
      return state.authentication;
  }
};
export default updateAuthentication;
