import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { logout } from '../actions/userActions';
const Header = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const { profileCompleted } = userInfo;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Skills</Navbar.Brand>
          </LinkContainer>
          <Nav className='mr-auto'>
            {userInfo ? (
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
