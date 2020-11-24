import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import MainPage from './containers/main-page/main-page';

const store = configureStore();

const Root = () => {
return (<Provider store={store}>
    <MainPage />
        </Provider>);
}

export default Root;
