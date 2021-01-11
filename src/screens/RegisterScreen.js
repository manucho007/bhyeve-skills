import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Col, Row, Form, Button } from 'react-bootstrap';
// import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  //   const [message, setMessage] = useState(null);

  //   const dispatch = useDispatch();

  //   const userRegister = useSelector((state) => state.userRegister);
  //   const { loading, error, userInfo } = userRegister;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  //   useEffect(() => {
  //     if (userInfo) {
  //       history.push(redirect);
  //     }
  //   }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch action

    //   dispatch(register(name, password));
  };
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {/* {message && <Message variant='danger'>{message}</Message>} */}
      {/* {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}></Form.Control>
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
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Already have a profile?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
