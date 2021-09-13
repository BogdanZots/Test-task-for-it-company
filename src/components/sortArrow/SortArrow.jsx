import React from "react";
import s from "./SortArrow.module.css";
import arrowDown from "../../assets/images/arrowDown.png";
import arrowUp from "../../assets/images/arrowUp.png";

const SortArrow = ({ directionSort }) => {
  return (
    <>
      {directionSort ? (
        <span className={s.imgContainer}>
          <img className={s.arrowDown} alt="sort" src={arrowUp}></img>
        </span>
      ) : (
        <span className={s.imgContainer}>
          <img className={s.arrowUp} alt="sort" src={arrowUp}></img>
        </span>
      )}
    </>
  );
};

export default SortArrow;
