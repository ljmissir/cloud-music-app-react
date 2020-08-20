import React from "react";
import loadable from "loadable-components";
import Pageing from "../components/Pageing";
import PageError from "../components/PageError";

const Loading = () => <Pageing />;

const ErrorDisplay = ({ error }) => <PageError errorMessage={error.message} />;

const meta = { LoadingComponent: Loading, ErrorComponent: ErrorDisplay };

export const Find = loadable(() => import("../pages/Find"), { ...meta });

export const Login = loadable(() => import("../pages/Login"), { ...meta });

export const Search = loadable(() => import("../pages/Search"), { ...meta });

export const SearchResult = loadable(() => import("../pages/SearchResult"), {
  ...meta,
});

export const Singer = loadable(() => import("../pages/Singer"), { ...meta });

export const Songs = loadable(() => import("../pages/Songs"), { ...meta });
