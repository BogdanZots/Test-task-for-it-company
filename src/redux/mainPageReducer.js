

const GET_NEW_PAGE = "GET-NEW-PAGE"
const GET_PAGE_COUNT = "GET-PAGE-COUNT"
const GET_USERS = "GET-USERS"


const initialState = {
    pageCount : 0,
    itemsPerPage : 20,
    currentPage:0,
};

export const mainPageReducer = (state = initialState, action) => {
    if (action.type === GET_USERS) {
        return{
            ...state,
            users: action.users
        }
    }
    if (action.type === GET_NEW_PAGE) {
        return{
            ...state,
            currentPage:action.currentPage
        }
    }
    if (action.type === GET_PAGE_COUNT) {
        return{
            ...state,
            pageCount : action.pageCount/state.itemsPerPage
        }
    }

    return {
        ...state
    };
};

export const setNewPageAC = (currentPage) => ({type: 'GET-NEW-PAGE', currentPage});
export const setPageCountAC = (pageCount) => ({type: 'GET-PAGE-COUNT', pageCount});
export const setUsersAC = (users) => ({type: 'GET-USERS', users});
