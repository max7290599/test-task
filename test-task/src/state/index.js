import { combineReducers } from 'redux';
import meta from './meta-reducer';
import changeForm from "./form-reducer";
import { dialogWindow } from "./dialogWindow";

export default combineReducers({
    meta,
    changeForm,
    dialogWindow
});
