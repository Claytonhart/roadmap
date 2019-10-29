import React, { useEffect } from "react";
import styled from "styled-components/macro";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Landing from "../landing/Landing";
import Project from "../project/Project";

// auth
import { loadUser } from "../../actions/auth";
import setAuthToken from "../../utils/setAuthToken";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../alert/Alert";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/project" component={Project} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
