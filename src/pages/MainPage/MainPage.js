/* eslint-disable no-undef */
import React, {useState} from "react";
import {useApiData} from "../../hooks/useApiData";
import {Table} from "../../components/Table/Table";
import Loader from "../../components/Loader/Loader";
import s from "./MainPage.module.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Pagintation from "../../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import Error from "../../components/Error/Error";
import {StateFilter} from "../../components/StateFilter/StateFilter";
import {getFilteredUsersByName} from "../../helpers/helpers";
export const MainPage = () => {
    const allUsers = useSelector((store) => store.mainPage.allUsers);
    const [userToFind,setUserToFind] = useState("");
    const [stateFilter,setFilteredBystate] = useState("");
    const [searchMode,setSearchMode] = useState("");
    const [selectMode,setSelectMode] = useState("");
    let filteredUsers = getFilteredUsersByName(allUsers, userToFind).filter((user) => {
        if (stateFilter === "") {
            return true;
        }
        return user.adress.state === stateFilter;
    });

    const handleSelect = (e) => {
        const fieldToFilter = e.target.value;
        setFilteredBystate(fieldToFilter);
    };
    const handleSelectMode = (e) => {
        const select = e.target.value;
        setSelectMode(select);
    };
    const handleSearchMode = (e) => {
        const select = e.target.value;
        setSearchMode(select);
    };
    const data = useApiData();

    return (
        <div className={s.container}>
            {data.isError
                ? <Error/>
                : null}
            {data.isLoading
                ? <Loader/>
                : null}
            <Input
                userToFind={userToFind}
                setUserToFind={setUserToFind}
                handleSearchMode={handleSearchMode}/>
            <StateFilter
                handleSelect={handleSelect}
                data={filteredUsers}
                stateFilter={stateFilter}
                userToFind={userToFind}
                handleSelectMode={handleSelectMode}/>
            <Table
                data={filteredUsers}
                selectMode={selectMode}
                allUsers={allUsers}
                searchMode={searchMode}/>
            <Pagintation
                searchMode={searchMode}
                selectMode={selectMode}
                filteredUsers={filteredUsers}/>
            <Card/>
        </div>
    );
};
export default MainPage;
