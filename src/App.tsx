import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppTheme from './theme/AppTheme';
import Routes from './navigation/Routes';


export default function App() {
    return (
        <Provider store={store} >
            <AppTheme>
                <Routes />
            </AppTheme>
        </Provider >
    )
}