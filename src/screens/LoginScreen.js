import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { signIn } from '../actions/userActions';

const LoginScreen = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userToken } = userLogin;

  useEffect(() => {
    if (userToken) {
      history.push('/fillinfo');
    }
  }, [history, userToken]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(signIn(username, password));
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Don't have an account? <Link to='/register'>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
