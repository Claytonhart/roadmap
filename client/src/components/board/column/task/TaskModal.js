import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { updateExistingTask } from "../../../../actions/board";

import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalForm
} from "./styles";

const TaskModal = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
  task,
  updateExistingTask
}) => {
  let { projectId } = useParams();
  const [inputValue, setInputValue] = useState(title);

  useEffect(() => {
    const keydownHandler = ({ key }) => {
      switch (key) {
        case "Escape":
          onClose();
          break;
        default:
      }
    };

    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onClose]);

  const onFormSubmit = e => {
    e.preventDefault();
    updateExistingTask(projectId, task, inputValue);
  };

  return !isVisible ? null : (
    <Modal onMouseDown={onClose}>
      <ModalDialog onMouseDown={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalForm onSubmit={onFormSubmit}>
            <ModalTitle
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </ModalForm>
          <ModalClose onMouseDown={onClose}>&times;</ModalClose>
        </ModalHeader>
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalDialog>
    </Modal>
  );
};

export default connect(
  null,
  { updateExistingTask }
)(TaskModal);
