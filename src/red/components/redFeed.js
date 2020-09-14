import React from "react";
import no_avatar from "../redImages/no-avatar.png";
import { Link } from "react-router-dom";

const RedFeed = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <div>
            <Link to={`/red/profiles/${article.author.username}`}>
              <img src={article.author.image} alt="" />
            </Link>
            <div className="red__feed_info">
              <p>ggggg</p>
              <span>{article.createdAt}</span>
            </div>
          </div>
          <Link to={`/red/articles/${article.slug}`}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Reed more...</span>
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
