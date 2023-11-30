import React from "react";
import { Header, Footer } from "./components/organisms";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Footer />
    </>
  );
}

export default App;
