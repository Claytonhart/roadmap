import React from "react";
import styled from "styled-components/macro";

import { Route, Switch, useRouteMatch } from "react-router-dom";

import Board from "../board/Board";
import TopBar from "../topbar/TopBar";
import Sidebar from "../sidebar/Sidebar";
import ProjectList from "./projectList/ProjectList";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  overflow: hidden;
`;

const Project = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Sidebar />
      <MainContainer>
        <TopBar />
        <Switch>
          <Route exact path={path} component={ProjectList} />
          <Route path={`${path}/:projectId`} component={Board} />
        </Switch>
      </MainContainer>
    </>
  );
};

export default Project;
