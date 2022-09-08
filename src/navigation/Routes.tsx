import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import Main from '../main/Main';
import Home from '../home/Home';
import { getDocs } from './docs';


export default function Routes() {
    function genRoutes(): JSX.Element[] {
        let routes: JSX.Element[] = [];
        let docs = getDocs();

        docs.forEach(element => {
            routes.push(<Route key={element.path} path={element.url} element={<Main source={element.source} />} />);
        });

        return routes;
    }

    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                {genRoutes()}
            </RouterRoutes>
        </BrowserRouter>
    )
}