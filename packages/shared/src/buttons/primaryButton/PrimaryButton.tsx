import React from "react";
import { BaseButton } from "../baseButton";
import styled from "styled-components";

export const PrimaryButton: React.FC<any> = ({ children, ...rest }) => {
  const Button = styled(BaseButton)`
    background-color: maroon;
    color: white;
    padding: 5px 8px;
  `;

  return <Button {...rest}>{children}</Button>;
};
