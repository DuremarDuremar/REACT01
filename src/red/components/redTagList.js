import React from "react";

const RedTagList = ({ tagList }) => {
  return (
    <ul>
      {tagList.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default RedTagList;
