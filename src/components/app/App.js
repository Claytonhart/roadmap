import React from "react";
import styled from "styled-components/macro";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import Board from "../board/Board";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Sidebar />
        <MainContainer>
          <TopBar />
          <Board />
        </MainContainer>
      </AppContainer>
    </Provider>
  );
};

export default App;
