import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setProjectsName } from "../../../../actions/projects";

import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  ModalInputDesc,
  ModalInputPeople,
  ModalClose,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalFooterButton,
  ModalForm
} from "./styles";
import { setAlert } from "../../../../actions/alert";

const EditProjectModal = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
  setProjectsName,
  setAlert,
  index,
  projectId,
  projectName
}) => {
  const [formData, setFormData] = useState({
    projectTitle: projectName,
    projectDesc: ""
  });

  const { projectTitle, projectDesc } = formData;

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

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormSubmit = async e => {
    e.preventDefault();

    if (!projectTitle) {
      setAlert("Please add a project title", "red");
    } else {
      await setProjectsName(index, projectId, projectTitle);
      onClose();
      // history.push(`/project/${id}`);
    }
  };

  return !isVisible ? null : (
    <Modal onMouseDown={onClose}>
      <ModalDialog onMouseDown={e => e.stopPropagation()}>
        <ModalHeader>
          {title}
          <ModalClose onMouseDown={onClose}>&times;</ModalClose>
        </ModalHeader>
        <ModalBody>
          <ModalContent>
            <ModalForm onSubmit={e => onFormSubmit(e)}>
              <label>Project Title</label>
              <ModalTitle
                type="text"
                name="projectTitle"
                value={projectTitle}
                onChange={e => onChange(e)}
                required
              />
              <label>Project Description</label>
              <ModalInputDesc
                type="text"
                name="projectDesc"
                value={projectDesc}
                onChange={e => onChange(e)}
              />
              <ModalInputPeople>Add people to the project</ModalInputPeople>
              {/* allow searching all users to display */}
              <ModalFooterButton onClick={onFormSubmit}>
                Update Project Settings
              </ModalFooterButton>
            </ModalForm>
            {content}
          </ModalContent>
        </ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalDialog>
    </Modal>
  );
};

export default withRouter(
  connect(
    null,
    { setAlert, setProjectsName }
  )(EditProjectModal)
);
