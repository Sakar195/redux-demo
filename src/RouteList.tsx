import { lazy } from "react";

const list = [
  {
    path: "/",
    component: lazy(() => import("./Home")),
    exact: true,
  },
];

export default list;
