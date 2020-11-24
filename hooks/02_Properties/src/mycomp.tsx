import * as React from "react";

interface MyProps {
  param: string;
}

export const MyComp: React.FC<MyProps> = (props) => (
  <h2>Tohle: {props.param}</h2>
);
