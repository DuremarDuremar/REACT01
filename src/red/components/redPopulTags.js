import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RedLoading from "./redLoading";
import RedError from "./redError";

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
    <div>
      <p>Popular tag</p>
      <div>
        {response.tags.map((tag) => (
          <Link to={`/red/tags/${tag}`} key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RedPopTag;
