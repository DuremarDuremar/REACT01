export default class StoreServer {
  getBooks() {
    return [
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
    ];
  }
}
