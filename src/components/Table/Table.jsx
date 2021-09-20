import React, {useState} from "react";
import s from "./Table.module.css";
import SortArrow from "../sortArrow/SortArrow";
import {sortFields} from "../../consts/consts";
import {useDispatch, useSelector} from "react-redux";
import {setcurrentUserAC} from "../../redux/mainPageReducer";
import {setSortDirectionAC} from "../../redux/mainPageReducer";
import {sortData} from "../../helpers/helpers";

export const Table = ({data, allUsers, searchMode, selectMode}) => {
    const dispatch = useDispatch();
    const {currentPage, prevPage, itemsPerPage} = useSelector((store) => store.mainPage);

    const [directionSort,setDirectionSort] = useState(false);
    const [userId,setUserId] = useState(0);
    const [fieldToSearch,setFieldToSearch] = useState("");
    const sortField = (field) => {
        sortData(allUsers, field, data, setDirectionSort, directionSort, sortFields);
        dispatch(setSortDirectionAC(field));
        setFieldToSearch(field);
    };
    const showCurrentUser = (id) => {
        const user = [...data].find((user) => user.id === id);
        setUserId(user.id);
        dispatch(setcurrentUserAC(user));
    };
    const SortField = ({sortField, fieldToSort}) => {
        return (
            <th
                className={s.thContainer}
                onClick={() => {
                sortField(fieldToSort);
            }}>
                {fieldToSearch === fieldToSort
                    ? (<SortArrow directionSort={directionSort}/>)
                    : ("")}
                {fieldToSort}
            </th>
        );
    };
    const ShowFilteredTableUsers = ({data, setUserId, showCurrentUser}) => {
        return [...data].map((item) => {
            const id = item.id;
            return (
                <tr
                    className={userId === id
                    ? s.active
                    : ""}
                    key={item.id + item.email}
                    onClick={() => {
                    setUserId(id);
                    showCurrentUser(item.id);
                }}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.adress.state}</td>
                </tr>
            );
        });
    };
    const ShowTableUsers = ({data, setUserId, showCurrentUser}) => {
        return [...data]
            .slice(currentPage === 1
            ? 0
            : prevPage * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => {
                const id = item.id;
                return (
                    <tr
                        className={userId === id
                        ? s.active
                        : ""}
                        key={item.id + item.email}
                        onClick={() => {
                        setUserId(id);
                        showCurrentUser(item.id);
                    }}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.adress.state}</td>
                    </tr>
                );
            });
    };
    
    return (
        <table className={s.styledTable}>
            <thead>
                <tr>
                    <SortField sortField={sortField} fieldToSort={sortFields.id}/>
                    <SortField sortField={sortField} fieldToSort={sortFields.firstName}/>
                    <SortField sortField={sortField} fieldToSort={sortFields.lastName}/>
                    <SortField sortField={sortField} fieldToSort={sortFields.email}/>
                    <SortField sortField={sortField} fieldToSort={sortFields.phone}/>
                    <SortField sortField={sortField} fieldToSort={sortFields.state}/>
                </tr>
            </thead>
            <tbody>
                {selectMode || searchMode
                    ? (<ShowFilteredTableUsers
                        data={data}
                        setUserId={setUserId}
                        showCurrentUser={showCurrentUser}/>)
                    : (<ShowTableUsers
                        data={data}
                        setUserId={setUserId}
                        showCurrentUser={showCurrentUser}/>)}
            </tbody>
        </table>
    );
};
