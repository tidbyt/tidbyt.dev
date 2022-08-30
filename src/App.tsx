import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from './main/Main';
import store from './store';
import AppTheme from './theme/AppTheme';
import Home from './home/Home';

const ROUTES = require.context('../docs', true, /\.(md)$/)

export default function App() {

    function importAll(r) {
        let docs = [];
        ROUTES.keys().forEach((item) => {
            let doc = item.replace('.md', '').replace("./", '');
            let path = `/docs/${doc}`;
            docs.push(<Route key={path} path={path} element={<Main source={r(item).default} />} />);
        });
        return docs;
    }

    return (
        <Provider store={store} >
            <AppTheme>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {importAll(ROUTES)}
                    </Routes>
                </BrowserRouter>
            </AppTheme>
        </Provider >
    )
}