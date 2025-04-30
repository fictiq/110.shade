import React from "react";
import ReactDOM from "react-dom/client";

import { createRoot } from "react-dom/client";
import App from "./App";

import { RouteTree } from "../router/RouteTree"
import { RouterProvider, createRouter } from '@tanstack/react-router'

import PixiBlock from '../base/pixi/block'

import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const routeTree = RouteTree()
const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
});


const container = document.getElementById("app");
const root = createRoot(container)
root.render(

    <React.StrictMode>
        <PixiBlock />
        <MantineProvider theme={theme}>
            <RouterProvider router={router} />
        </MantineProvider>

    </React.StrictMode>
);