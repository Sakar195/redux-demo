import { lazy } from "react";

const list = [
  {
    path: "/",
    component: lazy(() => import("./layouts/Layout1")),
    exact: true,
    children: [
      {
        path: "",
        component: lazy(() => import("./components/LandingPage")),
        exact: true,
      },
      {
        path: "/table",
        component: lazy(() => import("./components/TableView")),
        exact: true,
      },
      {
        path: "/user",
        component: lazy(() => import("./components/User")),
        exact: true,
      },
    ],
  },
];

export default list;
