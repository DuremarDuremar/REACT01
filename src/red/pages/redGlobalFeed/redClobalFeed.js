import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import RedFeed from "../../components/redFeed";

const RedGlobalFeed = () => {
  const [{ isLoading, response, error }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/articles?limit=10&offset=0"
  );

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="red__feed">
      <div className="red__feed_container">
        <div className="red__feed_top">
          <h1>Clone Medium</h1>
          <p>A plase to share knowledge</p>
        </div>
        <div className="red__feed_wrapp">
          <div className="red__feed_main">
            {isLoading && <p>is loading...</p>}
            {error && <p>Some error happened</p>}
            {!isLoading && response && <RedFeed articles={response.articles} />}
          </div>
          <div className="red__feed_side">Popular tags</div>
        </div>
      </div>
    </div>
  );
};

export default RedGlobalFeed;
