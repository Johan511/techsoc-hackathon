import { Flex } from "@chakra-ui/react";
import { Navigate, Outlet, Route } from "@tanstack/react-location";
// import API from "./api";
// import { ProfilePage } from "./pages/app";
// import {
//   AdminLayout,
//   LinksPage,
//   SettingsPage,
//   ThemePage,
// } from "./pages/app/admin";
import SignInPage from "./pages/auth/SignIn";
import BudgetNewpage from "./pages/app/BudgetNew";
// import { HomePage } from "./pages/home";
import { LocationGenerics } from "./types";
import AppLayout from "./pages/app/AppLayout";
import LoginPage from "./pages/auth/SignIn";
import RegisterPage from "./pages/auth/SignUp";
import AppRootPage from "./pages/app/Root";
import NotFoundPage from "./pages/Error/NotFound";

export const routes: Route<LocationGenerics>[] = [
  {
    path: "/",
    element: <Navigate to="/auth/login"></Navigate>,
  },
  {
    path: "/auth",
    element: (
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w="100vw"
        h={"100vh"}
        bg="blackAlpha.100"
      >
        {/* <SignInPage></SignInPage>
         */}
        <Outlet></Outlet>
      </Flex>
    ),
    children: [
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout></AppLayout>,
    // loader: async (routeMatch: { params: { sid: string } }) => {
    //   return { profile: await API.getMyProfile() };
    // },
    children: [
      {
        path: "/",
        element: <AppRootPage></AppRootPage>,
      },
      {
        path: "/newBudget",
        element: <BudgetNewpage></BudgetNewpage>,
      },
      {
        path: "/budgets",
        element: "",
      },
    ],
    // children: [
    //   {
    //     path: "/",
    //     element: <Navigate to="links"></Navigate>,
    //   },
    //   {
    //     path: "/links",
    //     element: <LinksPage></LinksPage>,
    //   },
    //   {
    //     path: "/theme",
    //     element: <ThemePage></ThemePage>,
    //   },
    //   {
    //     path: "/settings",
    //     element: <SettingsPage></SettingsPage>,
    //   },
    // ],
  },
  // {
  //   path: "/:sid",
  //   element: <ProfilePage></ProfilePage>,
  //   loader: async (routeMatch: { params: { sid: string } }) => {
  //     return { profile: await API.getProfile(routeMatch.params.sid) };
  //   },
  // },
  {
    path: "/*",
    element: <NotFoundPage></NotFoundPage>,
  },
];
