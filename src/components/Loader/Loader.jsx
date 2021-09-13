import React from "react";
import s from "./Loader.module.css";

const Loader = () => {
  return (
      <div id={s.loadingMask}>
        <div class={s.preloader}>
          <div class={s.cThreeDotsLoader}></div>
        </div>
      </div>
  );
};

export default Loader;
