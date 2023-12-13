import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { MyServices } from "./myServices";
import { PrivacyPolicy } from "./privacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <MyServices />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
]);
