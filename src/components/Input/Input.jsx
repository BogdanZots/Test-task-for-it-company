import React from "react";
import s from "./Input.module.css";
const Input = ({  userToFind, setUserToFind }) => {

  return (
    <div class={s.controlGroup}>
      <input
        onChange={(e) => {
            setUserToFind(e.target.value)
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

export default Input;
