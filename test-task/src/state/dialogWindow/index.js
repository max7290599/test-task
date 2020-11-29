import { CLOSE_DIALOG } from './action';

export default (state = {isOpen: false}, action) => {
	switch (action.type) {
        case 'RESPONSE_FROM_THE_SERVER':
            return {
            ...state,
            isOpen: true,
            };
        case CLOSE_DIALOG:
            return { ...state, isOpen: false };
        default:
            return state;
	}
}
