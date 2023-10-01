import React from "react";
import "./FilterArea.scss";

import { filtersType } from "../App/App";

import { FilterInput } from "../FilterInput/FilterInput";

type props = {
  filters: filtersType;
  setFilters: React.Dispatch<React.SetStateAction<filtersType>>;
};

const FilterArea: React.FC<props> = ({ filters, setFilters }) => {
  const filterList = ["name", "age"];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(() => ({ ...filters, [e.target.id]: e.target.value }));
  };

  return (
    <form className="filter-area">
      {filterList.map((item) => (
        <FilterInput key={item} text={item} action={onChange} />
      ))}
    </form>
  );
};

export { FilterArea };
