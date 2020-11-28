import { OPEN_DIALOG, CLOSE_DIALOG } from './action';

export function  dialogWindow(state = {isOpen: false}, action) {
	switch (action.type) {
        case OPEN_DIALOG:
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
