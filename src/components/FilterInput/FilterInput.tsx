import React, { useState } from "react";
import "./FilterInput.scss";

type FilterInputProps = {
  text: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterInput: React.FC<FilterInputProps> = ({ text, action }) => {
  return (
    <input
      className="filter-input"
      type="text"
      id={text}
      placeholder={text}
      onChange={(e) => action(e)}
    />
  );
};

export { FilterInput };
