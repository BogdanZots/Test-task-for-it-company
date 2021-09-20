export const getPrevPage = (pageNum) => {
    return pageNum;
};
export const getCurrentPage = (pageNum) => {
    return pageNum;
};
export const sortUpData = (arr, field) => {
    return arr.sort((a, b) => {
        if (a[field] > b[field]) {
            return 1;
        } else if (a[field] < b[field]) {
            return -1;
        } else if (a[field] === b[field]) {
            return 0;
        }
    });
};

export const sortDownData = (arr, field) => {
    return arr.sort((a, b) => {
        if (a[field] > b[field]) {
            return -1;
        } else if (a[field] < b[field]) {
            return 1;
        } else {
            return 0;
        }
    });
};

export const sortDownObjData = (arr, field) => {
    return arr.sort((a, b) => {
        if (a.adress[field] > b.adress[field]) {
            return -1;
        } else if (a.adress[field] < b.adress[field]) {
            return 1;
        } else if (a.adress[field] === b.adress[field]) {
            return 0;
        }
    });
};
export const sortUpObjData = (arr, field) => {
    return arr.sort((a, b) => {
        if (a.adress[field] > b.adress[field]) {
            return 1;
        } else if (a.adress[field] < b.adress[field]) {
            return -1;
        } else if (a.adress[field] === b.adress[field]) {
            return 0;
        }
    });
};

export const getFilteredUsersByName = (arr, userToFind) => {
    return arr.filter((user) => {
        return user
            .firstName
            .includes(userToFind);
    });
};

export const getUniqueStates = (arr) => {
    let results = [];
    for (let str of arr) {
        if (!results.includes(str)) {
            results.push(str);
        }
    }
    return results;
};

export const sortData = (allUsers, field, arr, setDirectionSort, directionSort, sortFields) => {
    setDirectionSort(!directionSort);
    if (field === sortFields.state) {
        sortUpObjData(allUsers, field);
        sortUpObjData(arr, field);
    }
    if (!directionSort && field === sortFields.state) {
        sortDownObjData(arr, field);
        sortDownObjData(allUsers, field);
    }
    if (directionSort) {
        sortUpData(allUsers, field);
        sortUpData(arr, field);
    }
    if (!directionSort) {
        sortDownData(allUsers, field);
        sortDownData(arr, field);
    }
};
