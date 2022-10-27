import React, { InputHTMLAttributes } from "react";
import "./switch.css";

export const Switch = ({ ...args }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="slide">
      <input type="checkbox" {...args}></input>
    </div>
  );
};
