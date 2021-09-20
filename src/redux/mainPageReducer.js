const SET_NEW_PAGE = "SET-NEW-PAGE";
const SET_PAGE_COUNT = "SET-PAGE-COUNT";
const SET_ALL_USERS = "SET-ALL-USERS";
const SET_USERS_TO_SORT = "SET-USERS-TO-SORT";
const SET_PREV_PAGE = "SET-PREV-PAGE";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USER_TO_FIND = "SET-USER-TO-FIND";
const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_SORT_DIRECTION = "SET-SORT-DIRECTION";

const initialState = {
  pageCount: 0,
  prevPage: null,
  itemsPerPage: 20,
  currentPage: 1,
  allUsers: [],
  usersToSort: [],
  userToFind: "",
  currentUser: {},
  sortDirection: "",
};

export const mainPageReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...copyState,
        currentUser: action.currentUser,
      };
    case SET_SORT_DIRECTION:
      return {
        ...copyState,
        sortDirection: action.sortDirection,
      };
    case SET_PREV_PAGE:
      return {
        ...copyState,
        prevPage: action.prevPage,
      };
    case SET_ALL_USERS:
      return {
        ...copyState,
        allUsers: action.allUsers,
      };
    case SET_USERS_TO_SORT:
      copyState.usersToSort = [...action.usersToSort];
      return {
        ...copyState,
      };
    case SET_NEW_PAGE:
      return {
        ...copyState,
        currentPage: action.currentPage,
      };
    case SET_PAGE_COUNT:
      return {
        ...copyState,
        pageCount: action.pageCount / state.itemsPerPage,
      };
    case SET_CURRENT_PAGE:
      return {
        ...copyState,
        currentPage: action.currentPage,
      };
    case SET_USER_TO_FIND:
      return {
        ...state,
        userToFind: action.userToFind,
      };
    default:
      return state;
  }
};
export const setSortDirectionAC = (sortDirection) => ({
  type: "SET-SORT-DIRECTION",
  sortDirection,
});
export const setcurrentUserAC = (currentUser) => ({
  type: "SET-CURRENT-USER",
  currentUser,
});
export const setUsetToFindAC = (userToFind) => ({
  type: "SET-USER-TO-FIND",
  userToFind,
});
export const setNewPageAC = (currentPage) => ({
  type: "SET-NEW-PAGE",
  currentPage,
});
export const setPageCountAC = (pageCount) => ({
  type: "SET-PAGE-COUNT",
  pageCount,
});
export const setAllUsersAC = (allUsers) => ({
  type: "SET-ALL-USERS",
  allUsers,
});
export const setUsersToSortAC = (usersToSort) => ({
  type: "SET-USERS-TO-SORT",
  usersToSort,
});
export const setPrevPageAC = (prevPage) => ({
  type: "SET-PREV-PAGE",
  prevPage,
});
export const setCurrentPageAC = (currentPage) => ({
  type: "SET-CURRENT-PAGE",
  currentPage,
});
