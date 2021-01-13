import React, { useEffect } from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProfileScreen = ({ history }) => {
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, userFullProfile } = userProfile;
  const { userToken } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!userToken) {
      history.push('/login');
    }
    dispatch(getUserProfile());
  }, [dispatch, history, userToken]);

  return (
    <Row>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {userProfile && !loading && (
        <>
          <Col md={4}>
            <h2>User Profile</h2>
            <Card>
              <Card.Img variant='top' src='/images/user.png' />
              <Card.Body>
                <Card.Title>
                  {userFullProfile.firstName} {userFullProfile.lastName}
                </Card.Title>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>{userFullProfile.username}</ListGroupItem>
                <ListGroupItem>{userFullProfile.publicId}</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md={8}>
            <h2>My Skills</h2>
            <ListGroup>
              <h4>{userFullProfile.skills}</h4>

              {/* {userFullProfile &&
                !loading &&
                userFullProfile.skills.map((skill) => (
                  <ListGroupItem key={skill}>{skill}</ListGroupItem>
                ))} */}
            </ListGroup>
          </Col>
        </>
      )}
    </Row>
    // <h1>Profile</h1>
  );
};

export default ProfileScreen;
