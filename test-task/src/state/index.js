import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import meta from './meta-reducer';
// import {changeForm} from "./changeForm";

export default combineReducers({
    meta,
	// changeForm,
    // form: formReducer,
});
