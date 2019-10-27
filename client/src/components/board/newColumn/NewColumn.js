import React, { useState } from "react";

import NewColumnInput from "./NewColumnInput";

import { Container, NewColumnTitle, NewColumnTitleContainer } from "./styles";

const NewColumn = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    // onClick={createColumn}
    <Container>
      <NewColumnTitleContainer onClick={() => setIsSelected(true)}>
        {!isSelected ? (
          <NewColumnTitle>&#43; Add new column</NewColumnTitle>
        ) : (
          <NewColumnInput setIsSelected={setIsSelected} />
        )}
      </NewColumnTitleContainer>
    </Container>
  );
};

export default NewColumn;
