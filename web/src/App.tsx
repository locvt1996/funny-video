import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShareVideoPage from "./pages/ShareVideoPage";

// service
import { tryLoginApi } from "./store/authen/service";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(tryLoginApi({}));
  }, [dispath]);

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
      <Route path="/share-video" exact component={ShareVideoPage} />
    </div>
  );
}

export default App;
