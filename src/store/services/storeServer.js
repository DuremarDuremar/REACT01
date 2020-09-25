export default class StoreServer {
  data = [
    {
      id: 1,
      title: "Бойцовая рыбка",
      author: "Фрэнсис Форд Коппола",
      year: 1983,
      price: 10,
      country: "США",
      image:
        "https://st.kp.yandex.net/im/poster/2/5/5/kinopoisk.ru-Rumble-Fish-2556316.jpg",
    },
    {
      id: 2,
      title: "Седьмая печать",
      author: "Ингмар Бергман",
      year: 1957,
      price: 12,
      country: "Швеция",
      image:
        "https://st.kp.yandex.net/im/poster/5/8/6/kinopoisk.ru-Det-sjunde-inseglet-586720.jpg",
    },
    {
      id: 3,
      title: "Сладкая жизнь",
      author: "Федерико Феллини",
      year: 1960,
      price: 12,
      country: "Италия, Франция",
      image:
        "https://st.kp.yandex.net/im/poster/7/7/3/kinopoisk.ru-La-dolce-vita-773780.jpg",
    },
    {
      id: 4,
      title: "Затмение",
      author: "Микеланджело Антониони",
      year: 1962,
      price: 9,
      country: "Италия, Франция",
      image:
        "https://st.kp.yandex.net/im/poster/6/0/7/kinopoisk.ru-L_27eclisse-607301.jpg",
    },
  ];

  getStoreServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject(new Error("ssss")),
        resolve(this.data);
      }, 1000);
    });
  }
}
