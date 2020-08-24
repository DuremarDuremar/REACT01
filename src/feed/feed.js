import React from "react";
import "./feed.scss";

const Feed = () => {
  return <div className="feed__main">33</div>;
};

const getSend = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-KEY": "9fbbb1e4-8c01-4ed2-ac4c-9d8a1ac83e48",
    },
  });
  if (!res.ok) {
    throw new Error(`could not fetch ${res}`);
  }
  return await res.json();
};
console.log(getSend("https://kinopoiskapiunofficial.tech/api/v2.1/films/301"));

export default Feed;
