import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Form, Button } from 'react-bootstrap';
import { fillUserInfo } from '../actions/userActions';
const FillUserInfoScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(fillUserInfo(firstName, lastName));
  };
  return (
    <FormContainer>
      <h1>Add missing information</h1>
      {/* {error && <Message>{error}</Message>}
      {loading && <Loader />} */}
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
