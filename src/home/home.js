import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <>
        <header className="home__header">
          <div className="home__container">
            <div className="home__header_wrapper">
              <div className="home__header_photo">
                <img
                  src="https://vokrug.tv/pic/person/d/6/0/b/d60b454e66cfbe063274067ec900946b.jpg"
                  alt="22"
                />
              </div>
              <div className="home__header_info">
                <div className="home__header_name">Рутгер Хауэр</div>
                <a className="home__header_phone" href="tel:895674666">
                  8 (956) 746 66
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="home__main">
          <div className="home__container">
            <div className="home__main_wrapper">
              <Link className="home__main_block" to="/todo">
                <p>1</p>
              </Link>
              <Link className="home__main_block" to="/star">
                <p>2</p>
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
