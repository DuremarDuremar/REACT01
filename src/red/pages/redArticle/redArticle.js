import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const RedArticle = (props) => {
  const slug = props.match.params.slug;
  const [{ isLoading, response, error }, doFetch] = useFetch(
    `https://conduit.productionready.io/api/articles/${slug}`
  );

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="red__article">
      {!isLoading && response && (
        <div className="red__article_banner">
          <h1>{response.article.title}</h1>
          <div className="red__article_meta">
            <Link to={`/profiles/${response.article.author.username}`}>
              <img src={response.article.author.image} alt="" />
            </Link>
            <div className="red__article_info">
              <Link to={`/profiles/${response.article.author.username}`}>
                {response.article.author.username}
              </Link>
            </div>
            <div className="red__article_date">
              {response.article.createdAt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedArticle;
