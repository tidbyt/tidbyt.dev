import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import Main from '../main/Main';
import Home from '../home/Home';
import { getDocs } from './docs';
import PublicAPI from '../publicapi/PublicAPI';
import ScrollToTop from './ScrollToTop';


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
            <ScrollToTop />
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/docs/api" element={<PublicAPI />} />
                {genRoutes()}
            </RouterRoutes>
        </BrowserRouter>
    )
}