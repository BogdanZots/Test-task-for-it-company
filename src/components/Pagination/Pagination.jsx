import React from "react";
import s from "./Pagination.module.css";
import { getPrevPage, getCurrentPage } from "../../helpers/helpers";
import { useSelector } from "react-redux";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { setCurrentPageAC, setUsersToSortAC } from "../../redux/mainPageReducer";
import { setPrevPageAC } from "../../redux/mainPageReducer";
import { useDispatch } from "react-redux";

const Pagination = ({ portionSize = 3 }) => {
  const dispatch = useDispatch()
  const {allUsers,itemsPerPage , pageCount} = useSelector(store => store.mainPage);
  const pages = [];

  for (let i = 0; i < pageCount; i++) { 
    pages.push(i + 1);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  const showNewPage = (prevPageNum, pageNum) => {
    dispatch(setUsersToSortAC(allUsers.slice(prevPageNum * itemsPerPage, pageNum * itemsPerPage)))

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
              dispatch(setCurrentPageAC(getCurrentPage(p)))
              dispatch(setPrevPageAC(getPrevPage(p - 1)))
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
