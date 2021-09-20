/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from "./Pagination.module.css";
import {getPrevPage, getCurrentPage} from "../../helpers/helpers";
import {useSelector} from "react-redux";
import {useState} from "react";
import {setCurrentPageAC, setUsersToSortAC} from "../../redux/mainPageReducer";
import {setPrevPageAC} from "../../redux/mainPageReducer";
import {useDispatch} from "react-redux";
import store from "../../redux/redux-store";

const Pagination = ({
    portionSize = 3,
    filteredUsers,
    searchMode,
    selectMode
}) => {
    const dispatch = useDispatch();
    const allUsers = store.getState().mainPage.allUsers;
    const itemsPerPage = store.getState().mainPage.itemsPerPage;
    let pageCount = Math.ceil(filteredUsers.length / itemsPerPage);
    const currentPage = useSelector((store) => store.mainPage.currentPage);
    const [lastPage,setLastPage] = useState(false);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber,
        setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    const showNewPage = (prevPageNum, pageNum) => {
      dispatch(setUsersToSortAC([...allUsers].slice(prevPageNum * itemsPerPage, pageNum * itemsPerPage)));
    };
    const PrevButton = ({setPortionNumber, setLastPage}) => {
        return (
            <li
                onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}>
                <a
                    href=""
                    onClick={(e) => {
                    e.preventDefault();
                    setLastPage(false);
                }}
                    className={s.prev}>
                    {currentPage === 0 || !lastPage || searchMode || selectMode
                        ? ""
                        : "prev"}
                </a>
            </li>
        );
    };
    const NextButton = ({setPortionNumber, setLastPage}) => {
        return (
            <li
                onClick={() => {
                setPortionNumber(portionNumber + 1);
            }}>
                <a
                    href=""
                    onClick={(e) => {
                    e.preventDefault();
                    setLastPage(true);
                }}
                    className={s.next}>
                    Next
                </a>
            </li>
        );
    };
    const FilteredPagination = () => {
        return pages.filter((p) => p).map((p, _) => {
            let activeP = p;
            return (
                <li key={Math.random(0, 1)} className={s.pageNumber}>
                    <a
                        href=""
                        onClick={(e) => e.preventDefault()}>
                        {p}
                    </a>
                </li>
            );
        });
    };
    const PaginationButtons = () => {
        return pages.filter((p) => p >= leftPortionNumber && p <= rightPortionNumber).map((p, _) => {
            let activeP = p;
            return (
                <li
                    key={Math.random(0, 1)}
                    onClick={() => {
                    dispatch(setCurrentPageAC(getCurrentPage(p)));
                    dispatch(setPrevPageAC(getPrevPage(p - 1)));
                    showNewPage(getPrevPage(p - 1), getCurrentPage(p));
                }}
                    className={s.pageNumber}>
                    <a
                        href=""
                        onClick={(e) => e.preventDefault()}
                        className={activeP === currentPage
                        ? s.active
                        : ""}>
                        {p}
                    </a>
                </li>
            );
        });
    };
    return (
        <ul className={s.pagination}>
            {portionNumber > 0 && (<PrevButton setPortionNumber={setPortionNumber} setLastPage={setLastPage}/>)}
            {searchMode || selectMode
                ? (<FilteredPagination/>)
                : (<PaginationButtons/>)}
            {portionCount > portionNumber && (<NextButton setPortionNumber={setPortionNumber} setLastPage={setLastPage}/>)}
        </ul>
    );
};

export default Pagination;
