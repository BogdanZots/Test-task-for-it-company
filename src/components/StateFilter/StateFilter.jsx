import React from "react";
import { useSelector } from "react-redux";
import s from "./StateFilter.module.css";
import { getUniqueStates } from "../../helpers/helpers";
import {
  getFilteredUsersByName,
} from "../../helpers/helpers";
export const StateFilter = ({ handleSelect, handleSelectMode ,  userToFind , stateFilter  }) => {
  
  const allUsers = useSelector((store) => store.mainPage.allUsers);
  const states = getFilteredUsersByName(allUsers, userToFind).map((user) => user.adress.state);
  const uniqualStates = getUniqueStates(states);
  return (
    <select
      name="select"
      className={s.select}
      value={stateFilter}
      onChange={(e) => {
        handleSelectMode(e);
        handleSelect(e);
      }}
    >
      <option className={s.select} value="" hidden selected>
        Filtering by state
      </option>
      <option className={s.select} value="">
        All
      </option>
      {uniqualStates.map((state) => {
        return (
          <option key={state} className={s.select} value={state}>
            {state}
          </option>
        );
      })}
    </select>
  );
};
