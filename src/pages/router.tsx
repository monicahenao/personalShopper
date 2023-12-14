import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { MyServices } from "./myServices";
import { PrivacyPolicy } from "./privacyPolicy";
import { StyleGallery } from "./styleGallery";
import { Faq } from "./faq";
import { Contact } from "./contact";

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
  {
    path: "/stylegallery",
    element: <StyleGallery />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
