import React from "react";
import styled from "styled-components/macro";
import WorkspaceItem from "./workspaceItem/WorkspaceItem";

const Container = styled.div`
  width: 244px;
  min-width: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: ${props => props.theme.primary.grey};
  color: #fff;
  padding: 10px;
`;

const NavContainer = styled.div`
  margin-bottom: 10px;
`;

const NavTitle = styled.div`
  /* text-align: center; */
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
  font-size: 24px;
  font-weight: 700;
  /* border-bottom: 2px solid ${props => props.theme.primary.red}; */
  margin-bottom: 50px;
`;

const NavLinks = styled.div`
  margin-bottom: 10px;
  min-height: 100px;
`;

const NavContent = styled.div`
  margin-bottom: 10px;
  flex-grow: 1;
  border-bottom: 2px solid ${props => props.theme.primary.lightgrey};
  overflow-y: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const NavContentHeader = styled.h3`
  border-bottom: 2px solid ${props => props.theme.primary.lightgrey};
  color: ${props => props.theme.primary.white};
  padding-bottom: 8px;
`;

const NavFooter = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <NavContainer>
        <NavTitle>Roadmap</NavTitle>
        <NavLinks>Links</NavLinks>
      </NavContainer>
      <NavContentHeader>Your Workspaces</NavContentHeader>
      <NavContent>
        <WorkspaceItem
          title="Workspace 1"
          people={[
            {
              color: "salmon",
              initials: "CH"
            },
            {
              color: "green",
              initials: "JK"
            },
            {
              color: "orange",
              initials: "HI"
            }
          ]}
          projects={[
            {
              color: "blue",
              name: "Project 1"
            },
            {
              color: "red",
              name: "Project 2"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 2"
          people={[
            {
              color: "orange",
              initials: "DA"
            },
            {
              color: "salmon",
              initials: "WE"
            },
            {
              color: "lightblue",
              initials: "OM"
            }
          ]}
          projects={[
            {
              color: "pink",
              name: "Not Project 3"
            },
            {
              color: "orange",
              name: "Project 5"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 1"
          people={[
            {
              color: "salmon",
              initials: "CH"
            },
            {
              color: "green",
              initials: "JK"
            },
            {
              color: "orange",
              initials: "HI"
            }
          ]}
          projects={[
            {
              color: "blue",
              name: "Project 1"
            },
            {
              color: "red",
              name: "Project 2"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 2"
          people={[
            {
              color: "orange",
              initials: "DA"
            },
            {
              color: "salmon",
              initials: "WE"
            },
            {
              color: "lightblue",
              initials: "OM"
            }
          ]}
          projects={[
            {
              color: "pink",
              name: "Not Project 3"
            },
            {
              color: "orange",
              name: "Project 5"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 1"
          people={[
            {
              color: "salmon",
              initials: "CH"
            },
            {
              color: "green",
              initials: "JK"
            },
            {
              color: "orange",
              initials: "HI"
            }
          ]}
          projects={[
            {
              color: "blue",
              name: "Project 1"
            },
            {
              color: "red",
              name: "Project 2"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 2"
          people={[
            {
              color: "orange",
              initials: "DA"
            },
            {
              color: "salmon",
              initials: "WE"
            },
            {
              color: "lightblue",
              initials: "OM"
            }
          ]}
          projects={[
            {
              color: "pink",
              name: "Not Project 3"
            },
            {
              color: "orange",
              name: "Project 5"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 1"
          people={[
            {
              color: "salmon",
              initials: "CH"
            },
            {
              color: "green",
              initials: "JK"
            },
            {
              color: "orange",
              initials: "HI"
            }
          ]}
          projects={[
            {
              color: "blue",
              name: "Project 1"
            },
            {
              color: "red",
              name: "Project 2"
            }
          ]}
        />
        <WorkspaceItem
          title="Workspace 2"
          people={[
            {
              color: "orange",
              initials: "DA"
            },
            {
              color: "salmon",
              initials: "WE"
            },
            {
              color: "lightblue",
              initials: "OM"
            }
          ]}
          projects={[
            {
              color: "pink",
              name: "Not Project 3"
            },
            {
              color: "orange",
              name: "Project 5"
            }
          ]}
        />
      </NavContent>
      <NavFooter>Invite To Roadmap!</NavFooter>
    </Container>
  );
};

export default Sidebar;
