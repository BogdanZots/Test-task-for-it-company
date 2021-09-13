import React, { useEffect, useState } from "react";
import { useApiData } from "../../hooks/useApiData";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader/Loader";
import s from "./MainPage.module.css";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Pagintation from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
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
  const { currentPage, itemsPerPage, pageCount } = useSelector(
    (store) => store.mainPage
  );

  const [directionSort, setDirectionSort] = useState(true);
  const [currentUser, setCurrentUserData] = useState({});
  const [userToFind, setUserToFind] = useState("");
  const [usersCopy, setusersCopy] = useState([]);
  const data = useApiData();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data.users);
    setusersCopy([...users]);
  }, [data.users, users]);
  const sortData = (field) => {
    let sortArray;
    if (field === sortFields.state) {
      sortArray = sortUpObjData(usersCopy, field);
    } else if (!directionSort && field === sortFields.state) {
      sortArray = sortDownObjData(usersCopy, field);
    } else if (directionSort) {
      sortArray = sortUpData(usersCopy, field);
    } else if (!directionSort) {
      sortArray = sortDownData(usersCopy, field);
    }

    data.setData(sortArray);
    setDirectionSort(!directionSort);
  };

  const filteredUsers = getFilteredUsers(usersCopy, userToFind);
  return (
    <div className={s.container}>
      {data.isError ? <Error /> : null}
      {data.isLoading ? <Loader /> : null}
      <Input userToFind={userToFind} setUserToFind={setUserToFind} />
      <Table
        directionSort={directionSort}
        sortData={sortData}
        data={filteredUsers.slice(currentPage, itemsPerPage)}
        setCurrentUserData={setCurrentUserData}
      />
      <Pagintation pageCount={pageCount} setNewPage={data.setData} />
      <Card currentUser={currentUser} />
    </div>
  );
};

export default MainPage;
