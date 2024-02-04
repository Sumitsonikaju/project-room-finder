import React from "react";
import Header from "./Component/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Main from "./Component/Main";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/mainPage",
        element: <Main />,
      },
    ],
  },
]);

export default App;
