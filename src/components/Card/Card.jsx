import React, { useState } from "react";
import s from "./Card.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Card = React.memo(() => {
  const { currentUser } = useSelector((store) => store.mainPage);
  if (currentUser === undefined || Object.keys(currentUser).length === 0 || currentUser.firstName === "") {
    return "";
  }
  return (
    <div class={s.card}>
      <div class={s.infos}>
        <div class={s.name}>
          <h2>
            Selected Profile :{" "}
            {currentUser.firstName + " " + currentUser.lastName}
          </h2>
          <h4>Description : {currentUser.description}</h4>
        </div>
        <ul class={s.stats}>
          <li>
            <h3>State : </h3>
            <h4>{currentUser.adress.state}</h4>
          </li>
          <li>
            <h3>Index : </h3>
            <h4>{currentUser.adress.zip}</h4>
          </li>
          <li>
            <h3>City : </h3>
            <h4>{currentUser.adress.city}</h4>
          </li>
          <li>
            <h3>Adress : </h3>
            {<h4>{currentUser.adress.streetAddress}</h4>}
          </li>
        </ul>
      </div>
    </div>
  );
});

Card.whyDidYouRender = true;

export default Card;

Card.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
