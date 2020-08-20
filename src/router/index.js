import React from "react";
import loadable from "loadable-components";
import Pageing from "../components/Pageing";
import PageError from "../components/PageError";
const Loading = () => <Pageing />;
const ErrorDisplay = ({ error }) => <PageError errorMessage={error.message} />;

export const Find = loadable(() => import("../pages/Find"), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay,
});

export const Login = loadable(() => import("../pages/Login"), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay,
});

export const Search = loadable(() => import("../pages/Search"), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay,
});
