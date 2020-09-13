import React from "react";

const BackendErrorMessages = ({ backendErrors }) => {
  //берем ключи обьекта с ошибками и превращаем его в массив (20)
  const errorMessages = Object.keys(backendErrors).map((name) => {
    const messages = backendErrors[name].join(" ");
    return `${name} ${messages}`;
  });
  console.log("hh", errorMessages);
  return (
    <ul>
      {errorMessages.map((errorMessage) => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  );
};

export default BackendErrorMessages;
