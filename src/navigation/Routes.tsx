import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

import Main from '../main/Main';
import Home from '../home/Home';
import { getDocs } from './docs';
import PublicAPI from '../publicapi/PublicAPI';
import ScrollToTop from './ScrollToTop';
import NotFound from '../notfound/NotFound';
import Console from '../console/Console';


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
                {/* Custom pages */}
                <Route path="/" element={<Home />} />
                <Route path='/console' element={<Main ><Console /></Main>} />
                <Route path="/docs/api" element={<Main ><PublicAPI /></Main>} />
                {/* Documentation */}
                {genRoutes()}
                {/* Redirects */}
                <Route path='/docs' element={<Navigate to='/docs/overview/getting-started' />} />
                <Route path='/docs/overview' element={<Navigate to='/docs/overview/getting-started' />} />
                <Route path='/docs/build' element={<Navigate to='/docs/build/build-for-tidbyt' />} />
                <Route path='/docs/integrate' element={<Navigate to='/docs/integrate/pushing-apps' />} />
                <Route path='/docs/publish' element={<Navigate to='/docs/publish/community-apps' />} />
                <Route path='/docs/engage' element={<Navigate to='/docs/engage/community' />} />
                <Route path='/docs/tidbyt-api' element={<Navigate to='/docs/api' />} />
                {/* Not found */}
                <Route path='*' element={<Main ><NotFound /></Main>} />
            </RouterRoutes>
        </BrowserRouter>
    )
}