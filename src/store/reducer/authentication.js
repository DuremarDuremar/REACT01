const updateAuthentication = (state, action) => {
  if (state === undefined) {
    return {
      isLogin: false,
    };
  }

  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: !state.authentication.isLogin,
      };
    default:
      return state.authentication;
  }
};
export default updateAuthentication;
