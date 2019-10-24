import React from "react";
import styled from "styled-components";

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
    <AppContainer>
      <Sidebar />
      <MainContainer>
        <TopBar />
        <Board />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
