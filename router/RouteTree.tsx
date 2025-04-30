import IndexPage from '../src/page/000.index/page';
import DashPage from '../src/page/001.dash/page';
import TitlePage from '../src/page/002.title/page';


import {
    Link,
    Outlet,
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router'

import React from "react";

import NavBar from "./NavBar"


const rootRoute = createRootRoute({
    component: () => (
        <>

            <div >

                <NavBar />

                <div style={{ position: 'absolute', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' }} >
                    <Outlet />
                </div>

            </div>

        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return (
            <IndexPage />
        );
    },
});

const dashRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/welcome",
    component: function Test() {
        return (
            <DashPage />
        );
    },
});


const titleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/title",
    component: function Test() {
        return (
            <TitlePage />
        );
    },
});

export var RouteTree = () => {

    var item = rootRoute.addChildren([indexRoute, dashRoute, titleRoute ]);
    return item

}

