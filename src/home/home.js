import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import photo from "./Ivan.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        <header className="home__header">
          <div className="home__container">
            <div className="home__header_wrapper">
              <div className="home__header_photo">
                <img src={photo} alt="22" />
              </div>
              <div className="home__header_info">
                <div className="home__header_name">Куляпин Иван</div>
                <a className="home__header_phone" href="tel:89262844577">
                  8 (926) 284 45 77
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="home__main">
          <div className="home__container">
            <div className="home__main_wrapper">
              <Link className="home__main_block todo__main_block" to="/todo">
                <p>Todo List</p>
              </Link>
              <Link
                className="home__main_block cinema__main_block"
                to="/cinema"
              >
                <p>Cinema Festivals</p>
              </Link>

              <a
                className="home__main_block"
                href="https://duremarduremar.github.io/gulpmaxgraph/app/#"
              >
                <p>3 site Toxin</p>
              </a>

              <Link className="home__main_block" to="/hooks">
                <p>4</p>
              </Link>

              <Link className="home__main_block" to="/vlad">
                <p>5</p>
              </Link>
              <Link className="home__main_block" to="/vl">
                <p>6</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
