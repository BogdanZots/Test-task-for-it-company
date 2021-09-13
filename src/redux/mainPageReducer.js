

const SET_NEW_PAGE = "SET-NEW-PAGE"
const SET_PAGE_COUNT = "SET-PAGE-COUNT"
const SET_USERS = "SET-USERS"


const initialState = {
    pageCount : 0,
    itemsPerPage : 20,
    currentPage:0,
};

export const mainPageReducer = (state = initialState, action) => {
    if (action.type === SET_USERS) {
        return{
            ...state,
            users: action.users
        }
    }
    if (action.type === SET_NEW_PAGE) {
        return{
            ...state,
            currentPage:action.currentPage
        }
    }
    if (action.type === SET_PAGE_COUNT) {
        return{
            ...state,
            pageCount : action.pageCount/state.itemsPerPage
        }
    }

    return {
        ...state
    };
};

export const setNewPageAC = (currentPage) => ({type: 'SET-NEW-PAGE', currentPage});
export const setPageCountAC = (pageCount) => ({type: 'SET-PAGE-COUNT', pageCount});
export const setUsersAC = (users) => ({type: 'SET-USERS', users});
