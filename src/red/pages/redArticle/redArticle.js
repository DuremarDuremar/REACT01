import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import RedError from "../../components/redError";
import RedLoading from "../../components/redLoading";
import RedTagList from "../../components/redTagList";
import { Link } from "react-router-dom";
import "./redArticle.scss";

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
        <div className="red__article_container">
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
      <div className="red__article_container">
        {isLoading && <RedLoading />}
        {error && <RedError />}
        {response && (
          <>
            <div className="red__article_content">
              <p>{response.article.body}</p>
            </div>
            <RedTagList tagList={response.article.tagList} />
          </>
        )}
      </div>
    </div>
  );
};

export default RedArticle;
