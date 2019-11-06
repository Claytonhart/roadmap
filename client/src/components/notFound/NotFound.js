import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import notFoundImage from '../../assets/images/Web_SVG.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NotFoundContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 100%;
  margin-top: 100px;
`;

const Image = styled.img`
  max-height: 30%;
`;

const NotFoundHeader = styled.div`
  padding: 20px 40px;
`;

const NotFoundLogo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.red};
  color: inherit;
  cursor: pointer;
  margin-top: 0;

  &:hover {
    color: inherit;
    text-decoration-color: ${props => props.theme.primary.red};
  }
`;

const NotFound = () => {
  return (
    <Container>
      <NotFoundHeader>
        <NotFoundLogo as={Link} to='/'>
          Roadmap
        </NotFoundLogo>
      </NotFoundHeader>
      <NotFoundContainer>
        <div>
          <Image src={notFoundImage} alt='not-found' />
          <h1>
            <i className='fas fa-exclamation-triangle' /> Page Not Found
          </h1>
          <p>Sorry, this page does not exist</p>
        </div>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;
