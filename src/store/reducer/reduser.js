const initialState = {
  films: [
    {
      id: 1,
      title: "Бойцовая рыбка",
      author: "Фрэнсис Форд Коппола",
    },
    {
      id: 2,
      title: "Седьмая печать",
      author: "Ингмар Бергман",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILMS_LOADED":
      return {
        films: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
