// rafceと入力後にタブキーを押しましょう🤗
import React from "react";
import styled from "styled-components";

// styled-componentsの使い方
const Test = styled.div<{ bg: string; color: string }>`
  color: ${(props) => props.color};
  border: 1px solid black;
  padding: 20px;
  background: ${(props) => props.bg};
`;

type ButtonProps = {
  bg: string;
  color: string;
  label: string;
};

const Button = ({ bg, color, label }: ButtonProps) => {
  return (
    <Test bg={bg} color={color}>
      {label}
    </Test>
  );
};

export default Button;
