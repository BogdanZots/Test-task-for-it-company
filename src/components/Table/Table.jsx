import React, {useState} from "react";
import s from "./Table.module.css";
import SortArrow from "../sortArrow/SortArrow";
import {sortFields} from "../../consts/consts";

const Table = ({data, sortData, directionSort, setCurrentUserData}) => {
    const [fieldToSearch,
        setFieldToSearch] = useState("");
    const sortField = (field) => {
        sortData(field);
        setFieldToSearch(field);
    };
    const showCurrentUser = (id) => {
        const user = data.find((user) => user.id === id);
        setCurrentUserData(user);
    };

    return (
        <table className={s.styledTable}>
            <thead>
                <tr>
                    <th
                        className={s.thContainer}
                        onClick={() => {
                        sortField(sortFields.id);
                    }}>
                        {fieldToSearch === sortFields.id
                            ? (<SortArrow directionSort={directionSort}/>)
                            : ("")}
                        id
                    </th>
                    <th className={s.thContainer} onClick={() => sortField(sortFields.firstName)}>
                        {fieldToSearch === sortFields.firstName
                            ? (<SortArrow directionSort={directionSort}/>)
                            : ("")}
                        firstName
                    </th>
                    <th className={s.thContainer} onClick={() => sortField(sortFields.lastName)}>
                        {fieldToSearch === sortFields.lastName
                            ? (<SortArrow directionSort={directionSort}/>)
                            : ("")}
                        lastName
                    </th>
                    <th className={s.thContainer} onClick={() => sortField(sortFields.email)}>
                        {fieldToSearch === sortFields.email
                            ? (<SortArrow directionSort={directionSort}/>)
                            : ("")}
                        email
                    </th>
                    <th className={s.thContainer} onClick={() => sortField(sortFields.phone)}>
                        {fieldToSearch === sortFields.phone
                            ? (<SortArrow directionSort={directionSort}/>)
                            : ("")}
                        phone
                    </th>
                    <th className={s.thContainer} onClick={() => sortField(sortFields.state)}>
                        {fieldToSearch === sortFields.state
                            ? (<SortArrow directionSort={directionSort}/>)
                            : ("")}
                        state
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return (
                        <tr
                            className={s.usersRow}
                            key={item.id + item.email}
                            onClick={() => showCurrentUser(item.id)}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.adress.state}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
