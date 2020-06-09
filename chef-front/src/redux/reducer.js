const initialState = {
    visibility: 'ALL',
    todos:[]
}

const reducer = (state= initialState, action) => {
 
    
    switch (action.type) {
        case 'LOGIN':

        return {
            ...state,
           user: action.payload
            
        }
        case 'LOGOUT': 

        return {
            ...state,
            user: undefined
        }
   
        case 'GET_ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            }

        case 'SEARCH':
            return {
                 ...state,
                  search: action.payload
             }
    
        ;

    default: 
        return state;
    }
}

export default reducer;
