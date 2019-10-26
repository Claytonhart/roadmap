import styled from "styled-components/macro";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 6px;

  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.primary.lightgrey};

    > span {
      opacity: 1;
    }
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemIcon = styled.span`
  width: 8px;
  height: 8px;
  margin-right: 12px;
  background-color: ${props =>
    props.color ? props.color : props.theme.primary.lightgrey};
`;

export const ItemName = styled.p`
  margin: 0;
`;

export const ItemEditIcon = styled.span`
  cursor: pointer;
  opacity: 0;
`;
