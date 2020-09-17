import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import RedFeed from "../../components/redFeed";
import RedPaginations from "../../components/redPagination";
import { stringify } from "query-string";
import { getPaginator, limit } from "../../utils/utils";
import RedPopTag from "../../components/redPopulTags";
import RedLoading from "../../components/redLoading";
import RedError from "../../components/redError";
import RedFeedToggle from "../../components/redFeedToggle";
import "../redGlobalFeed/redGlobalFeed.scss";

const RedYourFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const url = match.url;
  const stringifyParams = stringify({
    limit,
    offset,
  });
  const [{ isLoading, response, error }, doFetch] = useFetch(
    `https://conduit.productionready.io/api/articles/feed?${stringifyParams}`
  );

  // console.log(match);
  // console.log(stringifyParams);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

  return (
    <div className="red__feed">
      <div className="red__feed_top">
        <h1>Clone Medium</h1>
        <p>A plase to share knowledge</p>
      </div>
      <div className="red__feed_container">
        <div className="red__feed_wrapp">
          <div className="red__feed_main">
            <RedFeedToggle tagNames="foo" />
            {isLoading && <RedLoading />}
            {error && <RedError />}
            {!isLoading && response && (
              <>
                <RedFeed articles={response.articles} />
                <RedPaginations
                  total={response.articlesCount}
                  currentPage={currentPage}
                  url={url}
                  limit={limit}
                />
              </>
            )}
          </div>
          <div className="red__feed_side">
            <RedPopTag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedYourFeed;
