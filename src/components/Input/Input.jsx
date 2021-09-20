import React from "react";
import s from "./Input.module.css";
const Input = ({ userToFind, setUserToFind, handleSearchMode }) => {
  return (
    <div className={s.controlGroup}>
      <input
        onChange={(e) => {
          handleSearchMode(e);
          setUserToFind(e.target.value);
        }}
        id="input"
        type="text"
        name="input"
        placeholder="Enter your first name"
        value={userToFind}
      />
      <label htmlFor="input">First name</label>
    </div>
  );
};
Input.whyDidYouRender = true;
export default Input;
