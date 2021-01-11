import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
const App = () => {
  return (
    <Router>
      <Header />
      <h1>Hello</h1>
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />

      <Route path='/' component={HomeScreen} exact />
    </Router>
  );
};

export default App;
