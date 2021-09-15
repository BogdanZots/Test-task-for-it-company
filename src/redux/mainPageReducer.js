

const SET_NEW_PAGE = "SET-NEW-PAGE"
const SET_PAGE_COUNT = "SET-PAGE-COUNT"
const SET_ALL_USERS = "SET-ALL-USERS"
const SET_USERS_TO_SORT = "SET-USERS-TO-SORT"
const SET_PREV_PAGE = "SET-PREV-PAGE"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

const initialState = {
    pageCount : 0,
    prevPage : null,
    itemsPerPage : 20,
    currentPage:null,
    allUsers:[],
    usersToSort:[],
};

export const mainPageReducer = (state = initialState, action) => {
    let copyState = {...state}
    if (action.type === SET_PREV_PAGE) {
        return{
            ...copyState,
            prevPage: action.prevPage
        }
    }
    if (action.type === SET_ALL_USERS) {
        return{
            ...copyState,
            allUsers: action.allUsers
        }
    }
    if (action.type === SET_USERS_TO_SORT) {
        return{
            ...copyState,
            usersToSort: action.usersToSort
        }
    }
    if (action.type === SET_NEW_PAGE) {
        return{
            ...copyState,
            currentPage:action.currentPage
        }
    }
    if (action.type === SET_PAGE_COUNT) {
        return{
            ...copyState,
            pageCount : action.pageCount/state.itemsPerPage
        }
    }
    if (action.type === SET_CURRENT_PAGE) {
        return{
            ...copyState,
            currentPage : action.currentPage
        }
    }
    return {
        ...state
    };
};

export const setNewPageAC = (currentPage) => ({type: 'SET-NEW-PAGE', currentPage});
export const setPageCountAC = (pageCount) => ({type: 'SET-PAGE-COUNT', pageCount});
export const setAllUsersAC = (allUsers) => ({type: 'SET-ALL-USERS', allUsers});
export const setUsersToSortAC = (usersToSort) => ({type: 'SET-USERS-TO-SORT', usersToSort});
export const setPrevPageAC = (prevPage) => ({type: 'SET-PREV-PAGE', prevPage});
export const setCurrentPageAC  = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});