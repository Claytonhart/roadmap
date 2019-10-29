import styled from "styled-components/macro";

// Task

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgreen" : "white")};

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  cursor: pointer;
`;

// TaskEditButton

export const IconContainer = styled.span`
  cursor: pointer;
  opacity: 0;
  color: grey;
  transition: opacity 0.2s;
`;

// TaskEditModal

export const Modal = styled.div`
  cursor: default;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalDialog = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  min-height: 50vh;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: slide-in;
  animation-duration: 0.4s;

  @keyframes slide-in {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const ModalForm = styled.form`
  flex-grow: 1;
`;

export const ModalTitle = styled.input`
  font-family: inherit;
  color: ${props => props.theme.primary.grey};
  font-weight: 700;
  font-size: 24px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  justify-content: space-between;
  transition: all 0.2s;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #dbdbdb;
  }
`;

export const ModalClose = styled.span`
  font-size: 50px;
  line-height: 1;
  cursor: pointer;
  padding: 0 2rem;
  margin: -1rem -1rem -1rem auto;
`;

export const ModalBody = styled.div`
  overflow: auto;
`;

export const ModalContent = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #dbdbdb;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
