import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Form, Button } from 'react-bootstrap';
import { fillUserInfo } from '../actions/userActions';
const FillUserInfoScreen = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();

  const { userToken } = useSelector((state) => state.userLogin);
  const userFillInfo = useSelector((state) => state.userFillInfo);

  const { loading, error, userInfo, success } = userFillInfo;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fillUserInfo(firstName, lastName));
  };
  useEffect(() => {
    if (success) {
      history.push('/listskills');
    }
    if (!userToken) {
      history.push('/login');
    }
  }, [history, success, userToken]);

  return (
    <FormContainer>
      <h1>Add missing information</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstname'>
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='Lastname'>
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Update Profile
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FillUserInfoScreen;
