import React from "react";
import styled from "styled-components/macro";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "../landing/Landing";
import Project from "../project/Project";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/project" component={Project} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
