import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RedLoading from "./redLoading";
import RedError from "./redError";
import "./redPopulTags.scss";

const RedPopTag = () => {
  const [{ isLoading, response, error }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/tags"
  );

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <RedLoading />;
  }

  if (error) {
    return <RedError />;
  }

  return (
    <>
      <p className="red__pop-title">Popular tag</p>
      <div className="red__pop-tags">
        {response.tags.map((tag) => (
          <Link to={`/red/tags/${tag}`} key={tag} className="red__pop-tag">
            {tag}
          </Link>
        ))}
      </div>
    </>
  );
};

export default RedPopTag;
