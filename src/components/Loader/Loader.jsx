import React from "react";
import s from "./Loader.module.css";

const Loader = () => {
  return (
      <div id={s.loadingMask}>
        <div className={s.preloader}>
          <div className={s.cThreeDotsLoader}></div>
        </div>
      </div>
  );
};

export default Loader;
