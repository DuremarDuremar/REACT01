import React, { useState, useEffect } from "react";
import "./redArticleForm.scss";
import BackendErrorMessages from "./backendErrorMessages";

const RedArticleForm = ({ onSubmit, errors, initialValues }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [tagList, setTagList] = useState("");

  console.log("errors2", errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit("foo");
    console.log("dd", errors);
  };

  useEffect(() => {
    if (!initialValues) {
      return;
    }
    setTitle(initialValues.title);
    setBody(initialValues.body);
    setDescription(initialValues.description);
    setTagList(initialValues.tagList.join(" "));
    console.log("dd2", errors);
  }, [initialValues]);

  return (
    <div className="red__form">
      {errors && <BackendErrorMessages backendErrors={errors} />}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            className="red__form_title"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            className="red__form_about"
            placeholder="What's this article about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <textarea
            className="red__form_text"
            placeholder="Write your article (in markdown)"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </fieldset>
        <fieldset>
          <input
            type="text"
            className="red__form_tags"
            placeholder="Enter tags"
            value={tagList}
            onChange={(e) => setTagList(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Publish Article</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RedArticleForm;
