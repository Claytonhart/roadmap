import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Item = styled.li`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 6px;
  color: inherit;
  outline: none; */
  /* width: 100%; */
/* 
  transition: all 0.2s;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.primary.lightgrey};
    text-decoration: none;
    color: inherit;
    outline: none;
  } */
`;

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 6px;
  color: inherit;
  outline: none;

  transition: all 0.2s;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.primary.lightgrey};
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  &:hover {
    > span {
      opacity: 1;
    }
  }
`;

export const ItemButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 6px;
  color: inherit;
  outline: none;

  transition: all 0.2s;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary.lightgrey};
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  &:hover {
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
  font-size: 18px;
`;
