import React from "react";
import RedArticleForm from "../../components/redArticleForm";
import useFetch from "../../hooks/useFetch";

const RedCreate = () => {
  const [{ error, response }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/articles"
  );

  const initialValues = {
    title: "3333",
    description: "",
    body: "",
    tagList: [],
  };
  // const errors = {};
  const onSubmit = (article) => {
    doFetch({
      method: "post",
      data: {
        article,
      },
    });
  };

  console.log("error", error);

  return (
    <RedArticleForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      errors={(error && error.errors) || {}}
    />
  );
};

export default RedCreate;
