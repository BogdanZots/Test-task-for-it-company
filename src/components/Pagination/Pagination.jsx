import React from "react";
import s from "./Pagination.module.css";
import { getPrevPage, getCurrentPage } from "../../helpers/helpers";
import { useSelector } from "react-redux";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Pagination = ({ pageCount, setNewPage, portionSize = 3 }) => {
  const users = useSelector((store) => store.mainPage.users);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  const showNewPage = (prevPageNum, pageNum) => {
    setNewPage(users.slice(prevPageNum, pageNum));
  };

  return (
    <ul class={s.pagination}>
      {portionNumber > 0 && (
        <li
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          <a href="#" className={s.prev}>
            prev
          </a>
        </li>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p, _) => (
          <li
            key={Math.random(0, 1)}
            onClick={() => {
              showNewPage(getPrevPage(p - 1), getCurrentPage(p));
            }}
            class={s.pageNumber}
          >
            <a href="#">{p}</a>
          </li>
        ))}
      {portionCount > portionNumber && (
        <li
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          <a href="#" className={s.next}>
            Next
          </a>
        </li>
      )}
    </ul>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Pagination;
