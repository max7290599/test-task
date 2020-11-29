
const initialState = {
    data: {},
    isLoaded: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_META_SUCCESS':
            return {
                ...state,
                data: action.data,
                isLoaded: true
            };
        case 'RESPONSE_FROM_THE_SERVER':
            return {
                ...state,
                response: action.response,
            };
        default:
        return state;
    }
}
