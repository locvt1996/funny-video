import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <NavBar />
      <Route
        exact
        path="/"
        render={(reactRouterProps: any) => {
          return <HomePage {...reactRouterProps} />;
        }}
      />
      {/* <Route path="/register" component={SignUpPage} /> */}
    </div>
  );
}

export default App;
