import React, { useEffect, useState } from "react";
import { useApiData } from "../../hooks/useApiData";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader/Loader";
import s from "./MainPage.module.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Pagintation from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUsersToSortAC } from "../../redux/mainPageReducer";
import { sortFields } from "../../consts/consts";
import Error from "../../components/Error/Error";
import {
  sortUpData,
  sortDownData,
  sortDownObjData,
  sortUpObjData,
  getFilteredUsers,
} from "../../helpers/helpers";
export const MainPage = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, allUsers , usersToSort } = useSelector((store) => store.mainPage);
  useEffect(() => {
    dispatch(setUsersToSortAC(allUsers.slice(currentPage , itemsPerPage)));
  }, [allUsers,dispatch]);

  const [directionSort, setDirectionSort] = useState(true);
  const [currentUser, setCurrentUserData] = useState({});
  const [userToFind, setUserToFind] = useState("");
  const data = useApiData();
  const sortData = (field) => {
    let sortArray;
    if (field === sortFields.state) {
      sortArray = sortUpObjData(usersToSort, field);
    }
    if (!directionSort && field === sortFields.state) {
      sortArray = sortDownObjData(usersToSort, field);
    }
    if (directionSort) {
      sortArray = sortUpData(usersToSort, field);
    }
    if (!directionSort) {
      sortArray = sortDownData(usersToSort, field);
    }
    setDirectionSort(!directionSort);
  };

  const filteredUsers = getFilteredUsers(usersToSort, userToFind);
  return (
    <div className={s.container}>
      {data.isError ? <Error /> : null}
      {data.isLoading ? <Loader /> : null}
      <Input userToFind={userToFind} setUserToFind={setUserToFind} />
      <Table
        directionSort={directionSort}
        sortData={sortData}
        data={filteredUsers}
        setCurrentUserData={setCurrentUserData}
      />
      <Pagintation />
      <Card currentUser={currentUser} />
    </div>
  );
};

export default MainPage;
