import React from "react";
import { InputForm, Title } from "./styles";

export function Input({ type, placeholder, title, ...rest }) {
  return (
    <>
      <Title>{title}</Title>
      <InputForm type={type} placeholder={placeholder} {...rest} />
    </>
  );
}
