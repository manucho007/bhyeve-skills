import React, { useEffect } from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProfileScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, userToken } = userLogin;
  // const userProfile = useSelector((state) => state.userProfile);
  // const { loading, error, user } = userProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!userToken) {
      history.push('/login');
    }
    // if (!userInfo.skills) {
    //   // dispatch(listUsers());
    //   history.push('/listskills');
    // } else if (!userInfo.firstName) {
    //   history.push('/fillinfo');
    // } else if (!userInfo.Token) {
    //   history.push('/login');
    // } else {
    //   dispatchEvent
    // }
    dispatch(getUserProfile());
  }, [dispatch, history, userToken]);

  return (
    <Row>
      <Col md={4}>
        <h2>User Profile</h2>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Card>
          <Card.Img variant='top' src='/images/user.png' />
          <Card.Body>
            <Card.Title>
              {userInfo.firstName} {userInfo.lastName}
            </Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>{userInfo.username}</ListGroupItem>
            <ListGroupItem>{userInfo.publicId}</ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      <Col md={8}>
        <h2>My Skills</h2>
        <ListGroup>
          {userInfo.skills.map((skill) => (
            <ListGroupItem key={skill}>{skill}</ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
