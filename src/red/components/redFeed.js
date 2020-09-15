import React from "react";
import { Link } from "react-router-dom";
import no_avatar from "../redImages/no-avatar.png";
import "./redFeed.scss";

const RedFeed = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div className="red__item_feed" key={index}>
          <div className="red__item_main">
            <Link to={`/red/profiles/${article.author.username}`}>
              <img src={no_avatar} alt="" />
            </Link>
            <Link to={`/red/profiles/${article.author.username}`}>
              <p>{article.author.username}</p>
            </Link>
            <div className="red__item_info">
              <span>{article.createdAt}</span>
            </div>
          </div>
          <Link to={`/red/articles/${article.slug}`} className="red__item_link">
            <div>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <span>Reed more...</span>
            </div>
            <ul>
              {article.tagList.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Link>
        </div>
      ))}
    </>
  );
};

export default RedFeed;
