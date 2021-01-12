import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SkillListScreen from './screens/SkillListScreen';
import FillUserInfoScreen from './screens/FillUserInfoScreen';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/listskills' component={SkillListScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/fillinfo' component={FillUserInfoScreen} />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
