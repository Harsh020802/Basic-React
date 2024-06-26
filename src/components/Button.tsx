import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: string;
}
export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
