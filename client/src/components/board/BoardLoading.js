import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  background-color: #f6f8f9;
`;

const BoardLoadingItem = styled.div`
  margin: 8px;
  border: 1px solid transparent;
  background-color: #fff;
  border-radius: 5px;
  width: 250px;
  min-width: 250px;
  height: 307px;

  display: flex;
  flex-direction: column;
`;

const BoardLoading = () => {
  return (
    <Container>
      <BoardLoadingItem />
      <BoardLoadingItem />
      <BoardLoadingItem />
    </Container>
  );
};

export default BoardLoading;
