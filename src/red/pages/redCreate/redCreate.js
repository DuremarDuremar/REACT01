import React from "react";
import RedArticleForm from "../../components/redArticleForm";

const RedCreate = () => {
  const initialValues = {};
  const errors = {};
  const onSubmit = (data) => {
    console.log("data", data);
  };

  return <RedArticleForm onSubmit={onSubmit} />;
};

export default RedCreate;
