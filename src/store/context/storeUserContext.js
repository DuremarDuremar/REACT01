import React, { useState } from "react";

export const [state, setState] = useState({
  isLoading: false,
  isLoggedIn: null,
  currentUser: null,
});
