
const initialState = {
    data: {
        
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_META_SUCCESS':
            return {
                ...state,
                data: action.data
            }
    default:
        return state;
    }
}
