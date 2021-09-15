const itemsPerPage = 20;

export const getPrevPage = (pageNum) => {
  return pageNum /* * itemsPerPage; */
};
export const getCurrentPage = (pageNum) => {
  return/*  ( */pageNum/* ) * itemsPerPage; */
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

export const getFilteredUsers = (arr, userToFind) => {
  return arr.filter((user) => {
    return user.firstName.includes(userToFind);
  });
};
