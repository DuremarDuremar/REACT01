import React, { useState, useEffect } from "react";
import CinemaHeader from "./cinemaHeader/cinemaHeader";
import CinemaMain from "./cinemaMain/cinemaMain";
import {
  cinemaCannes,
  cinemaBerlin,
  cinemaVenice,
  cinemaSundance,
} from "./cinemaServer/cinemaServer";
import "./cinema.scss";
import "./cinemaAdaptive.scss";

const Cinema = () => {
  const [cinemaFest, setCinemaFest] = useState("Cannes");
  const [stateCinema, setStateCinema] = useState(null);
  const [cinemaInfo, setCinemaInfo] = useState(CinemaInformation[1]);
  const cinemaFestActive = (item) => {
    setCinemaFest(item);
  };

  useEffect(() => {
    switch (cinemaFest) {
      case "Berlin":
        cinemaBerlin().then((response) => setStateCinema(response));
        setCinemaInfo(CinemaInformation[0]);
        break;
      case "Cannes":
        cinemaCannes().then((response) => setStateCinema(response));
        setCinemaInfo(CinemaInformation[1]);
        break;
      case "Venice":
        cinemaVenice().then((response) => setStateCinema(response));
        setCinemaInfo(CinemaInformation[2]);
        break;
      case "Sundance":
        cinemaSundance().then((response) => setStateCinema(response));
        setCinemaInfo(CinemaInformation[3]);
        break;
      // default:
      //   cinemaCannes().then((response) => setStateCinema(prevState));
    }
  }, [cinemaFest]);

  return (
    <div className="cinema">
      <CinemaHeader
        cinemaFestActive={cinemaFestActive}
        cinemaFest={cinemaFest}
      />
      <CinemaMain
        stateCinema={stateCinema}
        cinemaFest={cinemaFest}
        setCinemaFest={setCinemaFest}
        cinemaInfo={cinemaInfo}
      />
      <footer className="cinema__footer">2</footer>
    </div>
  );
};

export default Cinema;

const CinemaInformation = [
  {
    festStars:
      "Сидни Люмет, Ингмар Бергман, Жан-Люк Годар, Роман Полански, Витторио Де Сика, Райнер Вернер Фасбиндер, Джон Кассаветес, Чжан Имоу, Марко Феррери, Теренс Малик, Милош Форман, Пол Томас Андерсон",
    festName: "Internationale Filmfestspiele Berlin",
  },
  {
    festStars:
      "Билли Уайлдер, Роберто Росселлини, Орсон Уэллс, Федерико Феллини, Анджей Вайда, Мартин Скорсезе, Дэвид Линч, Гас Ван Сент, Ларс фон Триер, Братья Дарденн, Михаэль Ханеке, Нури Бильге Джейлан",
    festName: "Festival international du film de Cannes",
  },
  {
    festStars:
      "Анри-Жорж Клузо, Акира Куросава, Микеланджело Антониони, Андрей Тарковский, Лукино Висконти, Луис Бунюэль, Вим Вендерс, Роберт Олтмен, Даррен Аронофски, Ким Ки Дук, Рой Андерссон, Альфонсо Куарон",
    festName: "Mostra Internazionale d’Arte Cinematografica",
  },
  {
    festStars:
      "Братья Коэн, Джим Джармуш, Стивен Содерберг, Хэл Хартли, Уит Стиллман, Брайан Сингер, Тодд Солондз, Александр Пэйн, Кристофер Нолан, Джаред Хесс, Дэвид Гордон Грин, Антонио Кампос",
    festName: "Sundance Film Festival",
  },
];
