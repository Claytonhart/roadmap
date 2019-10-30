import styled from "styled-components/macro";

// CreateProjectModal

export const Modal = styled.div`
  color: ${props => props.theme.primary.blue};
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
  /* min-height: 50vh; */
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

export const ModalHeader = styled.h3`
  border-bottom: 1px solid #dbdbdb;
  /* color: ${props => props.theme.primary.grey}; */
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const ModalForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.input`
  font-family: inherit;
  color: ${props => props.theme.primary.grey};
  font-weight: 700;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  justify-content: space-between;
  transition: all 0.2s;
  width: 100%;
  border: 1px solid #dbdbdb;
`;

export const ModalInputDesc = styled.input`
  font-family: inherit;
  color: ${props => props.theme.primary.grey};
  font-weight: 700;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  justify-content: space-between;
  transition: all 0.2s;
  width: 100%;
  border: 1px solid #dbdbdb;
`;

export const ModalInputPeople = styled.p`
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.primary.grey};
  }
`;

export const ModalClose = styled.span`
  font-size: 50px;
  line-height: 1;
  color: #272838;
  cursor: pointer;
  padding: 0 2rem;
  margin: -1rem -1rem -1rem auto;
`;

export const ModalBody = styled.div`
  overflow: auto;
`;

export const ModalContent = styled.div`
  padding: 1rem;
  max-width: 75%;
  margin: 40px auto;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #dbdbdb;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const ModalFooterButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: ${props => props.theme.primary.grey};
  color: #fff;
  padding: 12px 24px;
  transition: all 0.2s;
  margin-top: 20px;
  align-self: flex-end;

  &:hover {
    transform: translateY(-2px);
  }

  &:active,
  &:focus {
    transform: translateY(-1px);
  }
`;
