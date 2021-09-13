import React, { useState } from "react";
import s from "./SortComponent.module.css";

const SortComponent = ({ fieldName, mailField }) => {
  return (
    <th className={s.title}>
      <span>{fieldName}</span>
    </th>
  );
};

export default SortComponent;
